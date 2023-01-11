import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepoweroutlet as shared_writablepoweroutlet
from ..shared import poweroutlet as shared_poweroutlet


@dataclasses.dataclass
class DcimPowerOutletsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletsUpdateRequest:
    path_params: DcimPowerOutletsUpdatePathParams = dataclasses.field()
    request: shared_writablepoweroutlet.WritablePowerOutletInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerOutletsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet: Optional[shared_poweroutlet.PowerOutlet] = dataclasses.field(default=None)
    
