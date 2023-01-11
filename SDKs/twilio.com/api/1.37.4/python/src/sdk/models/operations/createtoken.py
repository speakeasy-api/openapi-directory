import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_token as shared_api_v2010_account_token


CREATE_TOKEN_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateTokenPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTokenCreateTokenRequest:
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreateTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTokenRequest:
    path_params: CreateTokenPathParams = dataclasses.field()
    security: CreateTokenSecurity = dataclasses.field()
    request: Optional[CreateTokenCreateTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_token: Optional[shared_api_v2010_account_token.APIV2010AccountToken] = dataclasses.field(default=None)
    
