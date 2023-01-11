import dataclasses



@dataclasses.dataclass
class DcimFrontPortTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortTemplatesDeleteRequest:
    path_params: DcimFrontPortTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimFrontPortTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
