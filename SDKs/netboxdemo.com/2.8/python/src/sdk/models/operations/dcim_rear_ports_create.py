import dataclasses
from typing import Optional
from ..shared import writablerearport as shared_writablerearport
from ..shared import rearport as shared_rearport


@dataclasses.dataclass
class DcimRearPortsCreateRequest:
    request: shared_writablerearport.WritableRearPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRearPortsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port: Optional[shared_rearport.RearPort] = dataclasses.field(default=None)
    
