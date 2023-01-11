import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_access_token as shared_verify_v2_service_access_token


FETCH_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchAccessTokenPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAccessTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAccessTokenRequest:
    path_params: FetchAccessTokenPathParams = dataclasses.field()
    security: FetchAccessTokenSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_access_token: Optional[shared_verify_v2_service_access_token.VerifyV2ServiceAccessToken] = dataclasses.field(default=None)
    
