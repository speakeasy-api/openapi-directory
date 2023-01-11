import dataclasses



@dataclasses.dataclass
class DcimConsolePortsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortsDeleteRequest:
    path_params: DcimConsolePortsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsolePortsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
