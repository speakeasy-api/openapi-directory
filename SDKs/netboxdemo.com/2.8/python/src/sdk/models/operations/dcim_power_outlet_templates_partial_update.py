import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepoweroutlettemplate as shared_writablepoweroutlettemplate
from ..shared import poweroutlettemplate as shared_poweroutlettemplate


@dataclasses.dataclass
class DcimPowerOutletTemplatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesPartialUpdateRequest:
    path_params: DcimPowerOutletTemplatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writablepoweroutlettemplate.WritablePowerOutletTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_outlet_template: Optional[shared_poweroutlettemplate.PowerOutletTemplate] = dataclasses.field(default=None)
    
