import dataclasses
from typing import Any,Optional
from ..shared import resendtokenrequest as shared_resendtokenrequest


@dataclasses.dataclass
class ResendTokenPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendTokenRequest:
    path_params: ResendTokenPathParams = dataclasses.field()
    request: shared_resendtokenrequest.ResendTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResendTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
