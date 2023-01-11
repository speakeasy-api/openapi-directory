import dataclasses
from typing import Optional
from ..shared import writablepowerpanel as shared_writablepowerpanel
from ..shared import powerpanel as shared_powerpanel


@dataclasses.dataclass
class DcimPowerPanelsCreateRequest:
    request: shared_writablepowerpanel.WritablePowerPanelInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPanelsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_panel: Optional[shared_powerpanel.PowerPanel] = dataclasses.field(default=None)
    
