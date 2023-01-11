import dataclasses



@dataclasses.dataclass
class ExtrasTagsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTagsDeleteRequest:
    path_params: ExtrasTagsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasTagsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
