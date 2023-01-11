import dataclasses
from typing import Optional
from ..shared import tokenrequest as shared_tokenrequest
from ..shared import tokenresponse as shared_tokenresponse


@dataclasses.dataclass
class AuthTokenRequest:
    request: Optional[shared_tokenrequest.TokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AuthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    token_response: Optional[shared_tokenresponse.TokenResponse] = dataclasses.field(default=None)
    
