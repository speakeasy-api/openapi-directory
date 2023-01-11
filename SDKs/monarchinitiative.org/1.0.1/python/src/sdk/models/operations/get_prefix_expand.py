import dataclasses



@dataclasses.dataclass
class GetPrefixExpandPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPrefixExpandRequest:
    path_params: GetPrefixExpandPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPrefixExpandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
