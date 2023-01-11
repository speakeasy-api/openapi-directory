import dataclasses
from typing import Optional
from ..shared import poweroutlet as shared_poweroutlet


@dataclasses.dataclass
class DcimPowerOutletsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletsReadRequest:
    path_params: DcimPowerOutletsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerOutletsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet: Optional[shared_poweroutlet.PowerOutlet] = dataclasses.field(default=None)
    
