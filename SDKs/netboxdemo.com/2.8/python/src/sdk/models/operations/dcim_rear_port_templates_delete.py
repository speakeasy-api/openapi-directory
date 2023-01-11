import dataclasses



@dataclasses.dataclass
class DcimRearPortTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesDeleteRequest:
    path_params: DcimRearPortTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
