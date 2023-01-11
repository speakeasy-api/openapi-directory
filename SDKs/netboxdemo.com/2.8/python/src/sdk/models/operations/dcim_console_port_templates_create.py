import dataclasses
from typing import Optional
from ..shared import writableconsoleporttemplate as shared_writableconsoleporttemplate
from ..shared import consoleporttemplate as shared_consoleporttemplate


@dataclasses.dataclass
class DcimConsolePortTemplatesCreateRequest:
    request: shared_writableconsoleporttemplate.WritableConsolePortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsolePortTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port_template: Optional[shared_consoleporttemplate.ConsolePortTemplate] = dataclasses.field(default=None)
    
