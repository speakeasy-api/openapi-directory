import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_balance as shared_api_v2010_account_balance


FETCH_BALANCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchBalancePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBalanceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBalanceRequest:
    path_params: FetchBalancePathParams = dataclasses.field()
    security: FetchBalanceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_balance: Optional[shared_api_v2010_account_balance.APIV2010AccountBalance] = dataclasses.field(default=None)
    
