import dataclasses
from typing import Optional
from ..shared import writablevlan as shared_writablevlan
from ..shared import vlan as shared_vlan


@dataclasses.dataclass
class IpamVlansCreateRequest:
    request: shared_writablevlan.WritableVlanInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVlansCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan: Optional[shared_vlan.Vlan] = dataclasses.field(default=None)
    
