import dataclasses
from typing import Optional
from ..shared import consoleserverport as shared_consoleserverport


@dataclasses.dataclass
class DcimConsoleServerPortsTracePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsTraceRequest:
    path_params: DcimConsoleServerPortsTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleServerPortsTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port: Optional[shared_consoleserverport.ConsoleServerPort] = dataclasses.field(default=None)
    
