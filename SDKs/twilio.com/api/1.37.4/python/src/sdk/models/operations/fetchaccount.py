import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account as shared_api_v2010_account


FETCH_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchAccountPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAccountSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAccountRequest:
    path_params: FetchAccountPathParams = dataclasses.field()
    security: FetchAccountSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account: Optional[shared_api_v2010_account.APIV2010Account] = dataclasses.field(default=None)
    
