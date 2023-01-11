import dataclasses
from typing import Optional
from ..shared import writablepoweroutlettemplate as shared_writablepoweroutlettemplate
from ..shared import poweroutlettemplate as shared_poweroutlettemplate


@dataclasses.dataclass
class DcimPowerOutletTemplatesCreateRequest:
    request: shared_writablepoweroutlettemplate.WritablePowerOutletTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet_template: Optional[shared_poweroutlettemplate.PowerOutletTemplate] = dataclasses.field(default=None)
    
