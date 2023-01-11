import dataclasses
from typing import Optional
from ..shared import writablepoweroutlet as shared_writablepoweroutlet
from ..shared import poweroutlet as shared_poweroutlet


@dataclasses.dataclass
class DcimPowerOutletsCreateRequest:
    request: shared_writablepoweroutlet.WritablePowerOutletInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerOutletsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet: Optional[shared_poweroutlet.PowerOutlet] = dataclasses.field(default=None)
    
