import dataclasses
from typing import Any,Optional
from ..shared import identitygetrequest as shared_identitygetrequest


@dataclasses.dataclass
class IdentityGetRequest:
    request: shared_identitygetrequest.IdentityGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IdentityGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    identity_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
