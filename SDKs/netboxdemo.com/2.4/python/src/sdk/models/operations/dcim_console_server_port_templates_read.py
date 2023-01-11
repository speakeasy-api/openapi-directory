import dataclasses
from typing import Optional
from ..shared import consoleserverporttemplate as shared_consoleserverporttemplate


@dataclasses.dataclass
class DcimConsoleServerPortTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesReadRequest:
    path_params: DcimConsoleServerPortTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port_template: Optional[shared_consoleserverporttemplate.ConsoleServerPortTemplate] = dataclasses.field(default=None)
    
