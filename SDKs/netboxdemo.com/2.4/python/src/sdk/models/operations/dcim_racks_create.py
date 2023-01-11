import dataclasses
from typing import Optional
from ..shared import writablerack as shared_writablerack
from ..shared import rack as shared_rack


@dataclasses.dataclass
class DcimRacksCreateRequest:
    request: shared_writablerack.WritableRackInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRacksCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack: Optional[shared_rack.Rack] = dataclasses.field(default=None)
    
