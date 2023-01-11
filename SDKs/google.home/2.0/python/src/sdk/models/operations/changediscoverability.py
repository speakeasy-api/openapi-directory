import dataclasses
from typing import Optional
from ..shared import changediscoverabilityrequest as shared_changediscoverabilityrequest


@dataclasses.dataclass
class ChangeDiscoverabilityRequest:
    request: shared_changediscoverabilityrequest.ChangeDiscoverabilityRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangeDiscoverabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    change_discoverability_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
