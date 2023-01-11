import dataclasses



@dataclasses.dataclass
class DcimConsolePortTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortTemplatesDeleteRequest:
    path_params: DcimConsolePortTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsolePortTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
