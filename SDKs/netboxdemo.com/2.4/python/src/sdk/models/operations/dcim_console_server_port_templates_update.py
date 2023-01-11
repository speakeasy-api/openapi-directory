import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableconsoleserverporttemplate as shared_writableconsoleserverporttemplate
from ..shared import consoleserverporttemplate as shared_consoleserverporttemplate


@dataclasses.dataclass
class DcimConsoleServerPortTemplatesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesUpdateRequest:
    path_params: DcimConsoleServerPortTemplatesUpdatePathParams = dataclasses.field()
    request: shared_writableconsoleserverporttemplate.WritableConsoleServerPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsoleServerPortTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port_template: Optional[shared_consoleserverporttemplate.ConsoleServerPortTemplate] = dataclasses.field(default=None)
    
