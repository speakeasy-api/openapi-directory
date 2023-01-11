import dataclasses
from typing import Optional
from ..shared import powerpanel as shared_powerpanel


@dataclasses.dataclass
class DcimPowerPanelsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPanelsReadRequest:
    path_params: DcimPowerPanelsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPanelsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_panel: Optional[shared_powerpanel.PowerPanel] = dataclasses.field(default=None)
    
