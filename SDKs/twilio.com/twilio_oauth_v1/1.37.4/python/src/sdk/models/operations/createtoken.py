import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import oauth_v1_token as shared_oauth_v1_token


CREATE_TOKEN_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclasses.dataclass
class CreateTokenCreateTokenRequest:
    client_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ClientSid' }})
    grant_type: str = dataclasses.field(metadata={'form': { 'field_name': 'GrantType' }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ClientSecret' }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Code' }})
    code_verifier: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CodeVerifier' }})
    device_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeviceCode' }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeviceId' }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RefreshToken' }})
    

@dataclasses.dataclass
class CreateTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTokenRequest:
    security: CreateTokenSecurity = dataclasses.field()
    request: Optional[CreateTokenCreateTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oauth_v1_token: Optional[shared_oauth_v1_token.OauthV1Token] = dataclasses.field(default=None)
    
