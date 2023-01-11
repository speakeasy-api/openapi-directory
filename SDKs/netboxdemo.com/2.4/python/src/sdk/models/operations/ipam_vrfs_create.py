import dataclasses
from typing import Optional
from ..shared import writablevrf as shared_writablevrf
from ..shared import vrf as shared_vrf


@dataclasses.dataclass
class IpamVrfsCreateRequest:
    request: shared_writablevrf.WritableVrfInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVrfsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vrf: Optional[shared_vrf.Vrf] = dataclasses.field(default=None)
    
