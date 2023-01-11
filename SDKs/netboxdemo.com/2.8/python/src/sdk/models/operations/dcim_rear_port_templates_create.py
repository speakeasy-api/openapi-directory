import dataclasses
from typing import Optional
from ..shared import writablerearporttemplate as shared_writablerearporttemplate
from ..shared import rearporttemplate as shared_rearporttemplate


@dataclasses.dataclass
class DcimRearPortTemplatesCreateRequest:
    request: shared_writablerearporttemplate.WritableRearPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port_template: Optional[shared_rearporttemplate.RearPortTemplate] = dataclasses.field(default=None)
    
