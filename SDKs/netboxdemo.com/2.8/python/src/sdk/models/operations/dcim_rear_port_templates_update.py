import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablerearporttemplate as shared_writablerearporttemplate
from ..shared import rearporttemplate as shared_rearporttemplate


@dataclasses.dataclass
class DcimRearPortTemplatesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesUpdateRequest:
    path_params: DcimRearPortTemplatesUpdatePathParams = dataclasses.field()
    request: shared_writablerearporttemplate.WritableRearPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port_template: Optional[shared_rearporttemplate.RearPortTemplate] = dataclasses.field(default=None)
    
