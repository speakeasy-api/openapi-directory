import dataclasses



@dataclasses.dataclass
class DcimConsoleServerPortsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsDeleteRequest:
    path_params: DcimConsoleServerPortsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleServerPortsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
