import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableconsoleserverport as shared_writableconsoleserverport
from ..shared import consoleserverport as shared_consoleserverport


@dataclasses.dataclass
class DcimConsoleServerPortsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsPartialUpdateRequest:
    path_params: DcimConsoleServerPortsPartialUpdatePathParams = dataclasses.field()
    request: shared_writableconsoleserverport.WritableConsoleServerPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimConsoleServerPortsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    console_server_port: Optional[shared_consoleserverport.ConsoleServerPort] = dataclasses.field(default=None)
    
