import dataclasses
from typing import Optional
from ..shared import checkreadystatusrequest as shared_checkreadystatusrequest
from ..shared import example13 as shared_example13


@dataclasses.dataclass
class CheckReadyStatusRequest:
    request: shared_checkreadystatusrequest.CheckReadyStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckReadyStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example13: Optional[shared_example13.Example13] = dataclasses.field(default=None)
    
