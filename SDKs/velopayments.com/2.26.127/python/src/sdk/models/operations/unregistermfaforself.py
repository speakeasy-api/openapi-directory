import dataclasses
from typing import Any,Optional
from ..shared import selfmfatypeunregisterrequest as shared_selfmfatypeunregisterrequest


@dataclasses.dataclass
class UnregisterMfaForSelfHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnregisterMfaForSelfRequest:
    headers: UnregisterMfaForSelfHeaders = dataclasses.field()
    request: shared_selfmfatypeunregisterrequest.SelfMfaTypeUnregisterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UnregisterMfaForSelfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
