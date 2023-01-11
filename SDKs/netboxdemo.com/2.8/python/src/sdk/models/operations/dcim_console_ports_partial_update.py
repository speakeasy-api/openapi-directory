import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableconsoleport as shared_writableconsoleport
from ..shared import consoleport as shared_consoleport


@dataclasses.dataclass
class DcimConsolePortsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsolePortsPartialUpdateRequest:
    path_params: DcimConsolePortsPartialUpdatePathParams = dataclasses.field()
    request: shared_writableconsoleport.WritableConsolePortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsolePortsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_port: Optional[shared_consoleport.ConsolePort] = dataclasses.field(default=None)
    
