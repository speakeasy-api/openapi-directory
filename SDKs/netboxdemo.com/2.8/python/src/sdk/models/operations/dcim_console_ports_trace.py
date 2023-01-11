import dataclasses
from typing import Optional
from ..shared import consoleport as shared_consoleport


@dataclasses.dataclass
class DcimConsolePortsTracePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortsTraceRequest:
    path_params: DcimConsolePortsTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsolePortsTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port: Optional[shared_consoleport.ConsolePort] = dataclasses.field(default=None)
    
