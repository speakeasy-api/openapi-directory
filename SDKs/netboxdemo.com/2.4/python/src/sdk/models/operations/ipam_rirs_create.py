import dataclasses
from typing import Optional
from ..shared import rir as shared_rir
from ..shared import rir as shared_rir


@dataclasses.dataclass
class IpamRirsCreateRequest:
    request: shared_rir.RirInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamRirsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rir: Optional[shared_rir.Rir] = dataclasses.field(default=None)
    
