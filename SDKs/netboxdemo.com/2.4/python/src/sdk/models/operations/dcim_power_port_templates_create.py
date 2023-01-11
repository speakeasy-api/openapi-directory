import dataclasses
from typing import Optional
from ..shared import writablepowerporttemplate as shared_writablepowerporttemplate
from ..shared import powerporttemplate as shared_powerporttemplate


@dataclasses.dataclass
class DcimPowerPortTemplatesCreateRequest:
    request: shared_writablepowerporttemplate.WritablePowerPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerPortTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port_template: Optional[shared_powerporttemplate.PowerPortTemplate] = dataclasses.field(default=None)
    
