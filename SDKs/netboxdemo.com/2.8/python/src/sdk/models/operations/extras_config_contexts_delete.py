import dataclasses



@dataclasses.dataclass
class ExtrasConfigContextsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasConfigContextsDeleteRequest:
    path_params: ExtrasConfigContextsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasConfigContextsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
