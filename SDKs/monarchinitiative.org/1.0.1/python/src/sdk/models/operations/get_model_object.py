import dataclasses



@dataclasses.dataclass
class GetModelObjectPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModelObjectRequest:
    path_params: GetModelObjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
