import dataclasses
from typing import Optional
from ..shared import consoleporttemplate as shared_consoleporttemplate


@dataclasses.dataclass
class DcimConsolePortTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortTemplatesReadRequest:
    path_params: DcimConsolePortTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConsolePortTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port_template: Optional[shared_consoleporttemplate.ConsolePortTemplate] = dataclasses.field(default=None)
    
