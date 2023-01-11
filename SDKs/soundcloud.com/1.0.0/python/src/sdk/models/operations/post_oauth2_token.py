import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import authorizationcode as shared_authorizationcode
from ..shared import refreshtoken as shared_refreshtoken
from ..shared import password as shared_password
from ..shared import error as shared_error


@dataclasses.dataclass
class PostOauth2TokenSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostOauth2TokenRequest:
    security: PostOauth2TokenSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostOauth2TokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    post_oauth2_token_400_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
