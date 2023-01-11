import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepowerport as shared_writablepowerport
from ..shared import powerport as shared_powerport


@dataclasses.dataclass
class DcimPowerPortsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortsPartialUpdateRequest:
    path_params: DcimPowerPortsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablepowerport.WritablePowerPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPortsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port: Optional[shared_powerport.PowerPort] = dataclasses.field(default=None)
    
