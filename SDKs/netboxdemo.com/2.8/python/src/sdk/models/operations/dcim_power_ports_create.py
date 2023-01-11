import dataclasses
from typing import Optional
from ..shared import writablepowerport as shared_writablepowerport
from ..shared import powerport as shared_powerport


@dataclasses.dataclass
class DcimPowerPortsCreateRequest:
    request: shared_writablepowerport.WritablePowerPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPortsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port: Optional[shared_powerport.PowerPort] = dataclasses.field(default=None)
    
