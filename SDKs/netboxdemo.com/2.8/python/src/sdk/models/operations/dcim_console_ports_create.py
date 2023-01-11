import dataclasses
from typing import Optional
from ..shared import writableconsoleport as shared_writableconsoleport
from ..shared import consoleport as shared_consoleport


@dataclasses.dataclass
class DcimConsolePortsCreateRequest:
    request: shared_writableconsoleport.WritableConsolePortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsolePortsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port: Optional[shared_consoleport.ConsolePort] = dataclasses.field(default=None)
    
