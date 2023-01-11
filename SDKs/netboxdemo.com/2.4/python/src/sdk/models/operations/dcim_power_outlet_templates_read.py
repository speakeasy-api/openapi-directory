import dataclasses
from typing import Optional
from ..shared import poweroutlettemplate as shared_poweroutlettemplate


@dataclasses.dataclass
class DcimPowerOutletTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesReadRequest:
    path_params: DcimPowerOutletTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet_template: Optional[shared_poweroutlettemplate.PowerOutletTemplate] = dataclasses.field(default=None)
    
