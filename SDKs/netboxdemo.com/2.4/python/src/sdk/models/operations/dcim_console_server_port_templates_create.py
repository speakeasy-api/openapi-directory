import dataclasses
from typing import Optional
from ..shared import writableconsoleserverporttemplate as shared_writableconsoleserverporttemplate
from ..shared import consoleserverporttemplate as shared_consoleserverporttemplate


@dataclasses.dataclass
class DcimConsoleServerPortTemplatesCreateRequest:
    request: shared_writableconsoleserverporttemplate.WritableConsoleServerPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port_template: Optional[shared_consoleserverporttemplate.ConsoleServerPortTemplate] = dataclasses.field(default=None)
    
