import dataclasses
from typing import Any,Optional
from ..shared import tokenresponseif as shared_tokenresponseif


@dataclasses.dataclass
class PostOauthV1TokenCreateTokenRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostOauthV1TokenCreateTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    token_response_if: Optional[shared_tokenresponseif.TokenResponseIf] = dataclasses.field(default=None)
    
