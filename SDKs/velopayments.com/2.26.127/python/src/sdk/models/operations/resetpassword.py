import dataclasses
from typing import Any,Optional
from ..shared import resetpasswordrequest as shared_resetpasswordrequest


@dataclasses.dataclass
class ResetPasswordRequest:
    request: shared_resetpasswordrequest.ResetPasswordRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResetPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    
