import dataclasses
from typing import Any,Optional
from ..shared import inviteuserrequest as shared_inviteuserrequest


@dataclasses.dataclass
class InviteUserRequest:
    request: shared_inviteuserrequest.InviteUserRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InviteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    inline_response_412: Optional[Any] = dataclasses.field(default=None)
    
