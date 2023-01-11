import dataclasses



@dataclasses.dataclass
class RefreshSourcePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RefreshSourceRequest:
    path_params: RefreshSourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RefreshSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
