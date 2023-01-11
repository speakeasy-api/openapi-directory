import dataclasses



@dataclasses.dataclass
class ExtrasGraphsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasGraphsDeleteRequest:
    path_params: ExtrasGraphsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasGraphsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
