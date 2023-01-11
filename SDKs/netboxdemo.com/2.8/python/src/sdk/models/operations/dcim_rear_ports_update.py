import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablerearport as shared_writablerearport
from ..shared import rearport as shared_rearport


@dataclasses.dataclass
class DcimRearPortsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortsUpdateRequest:
    path_params: DcimRearPortsUpdatePathParams = dataclasses.field()
    request: shared_writablerearport.WritableRearPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRearPortsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port: Optional[shared_rearport.RearPort] = dataclasses.field(default=None)
    
