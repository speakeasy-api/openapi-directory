import dataclasses
from typing import Any,Optional
from ..shared import authgetrequest as shared_authgetrequest


@dataclasses.dataclass
class AuthGetRequest:
    request: shared_authgetrequest.AuthGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AuthGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
