import dataclasses
from typing import Optional
from ..shared import writableconsoleserverport as shared_writableconsoleserverport
from ..shared import consoleserverport as shared_consoleserverport


@dataclasses.dataclass
class DcimConsoleServerPortsCreateRequest:
    request: shared_writableconsoleserverport.WritableConsoleServerPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port: Optional[shared_consoleserverport.ConsoleServerPort] = dataclasses.field(default=None)
    
