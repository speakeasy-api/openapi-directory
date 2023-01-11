import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableconsoleporttemplate as shared_writableconsoleporttemplate
from ..shared import consoleporttemplate as shared_consoleporttemplate


@dataclasses.dataclass
class DcimConsolePortTemplatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortTemplatesPartialUpdateRequest:
    path_params: DcimConsolePortTemplatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableconsoleporttemplate.WritableConsolePortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsolePortTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port_template: Optional[shared_consoleporttemplate.ConsolePortTemplate] = dataclasses.field(default=None)
    
