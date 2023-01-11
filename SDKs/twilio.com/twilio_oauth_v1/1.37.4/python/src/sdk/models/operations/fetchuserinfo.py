import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import oauth_v1_user_info as shared_oauth_v1_user_info


FETCH_USER_INFO_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclasses.dataclass
class FetchUserInfoSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserInfoRequest:
    security: FetchUserInfoSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oauth_v1_user_info: Optional[shared_oauth_v1_user_info.OauthV1UserInfo] = dataclasses.field(default=None)
    
