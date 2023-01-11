import dataclasses



@dataclasses.dataclass
class IncrementalRefreshSourcePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IncrementalRefreshSourceRequest:
    path_params: IncrementalRefreshSourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IncrementalRefreshSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
