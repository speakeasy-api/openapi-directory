import dataclasses
from typing import Optional
from ..shared import writablevirtualchassis as shared_writablevirtualchassis
from ..shared import virtualchassis as shared_virtualchassis


@dataclasses.dataclass
class DcimVirtualChassisCreateRequest:
    request: shared_writablevirtualchassis.WritableVirtualChassisInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimVirtualChassisCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_chassis: Optional[shared_virtualchassis.VirtualChassis] = dataclasses.field(default=None)
    
