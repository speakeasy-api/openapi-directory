import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepowerpanel as shared_writablepowerpanel
from ..shared import powerpanel as shared_powerpanel


@dataclasses.dataclass
class DcimPowerPanelsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPanelsPartialUpdateRequest:
    path_params: DcimPowerPanelsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablepowerpanel.WritablePowerPanelInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPanelsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_panel: Optional[shared_powerpanel.PowerPanel] = dataclasses.field(default=None)
    
