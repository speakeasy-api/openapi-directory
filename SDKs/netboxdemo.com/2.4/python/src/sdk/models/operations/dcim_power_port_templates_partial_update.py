import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepowerporttemplate as shared_writablepowerporttemplate
from ..shared import powerporttemplate as shared_powerporttemplate


@dataclasses.dataclass
class DcimPowerPortTemplatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortTemplatesPartialUpdateRequest:
    path_params: DcimPowerPortTemplatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writablepowerporttemplate.WritablePowerPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPortTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port_template: Optional[shared_powerporttemplate.PowerPortTemplate] = dataclasses.field(default=None)
    
