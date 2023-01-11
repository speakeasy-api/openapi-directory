import dataclasses



@dataclasses.dataclass
class DcimConsoleServerPortTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesDeleteRequest:
    path_params: DcimConsoleServerPortTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
