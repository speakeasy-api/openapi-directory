import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import request as shared_request
from ..shared import response as shared_response


@dataclasses.dataclass
class PostSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostRequest:
    request: shared_request.Request = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
