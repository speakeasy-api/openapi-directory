import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import tokenerror as shared_tokenerror


@dataclasses.dataclass
class GetAccessTokenRequestBody:
    grant_type: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'grant_type' }})
    scope: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'scope' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'refresh_token' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class GetAccessTokenSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAccessTokenRequest:
    security: GetAccessTokenSecurity = dataclasses.field()
    request: Optional[GetAccessTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GetAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    token: Optional[Any] = dataclasses.field(default=None)
    token_error: Optional[shared_tokenerror.TokenError] = dataclasses.field(default=None)
    
