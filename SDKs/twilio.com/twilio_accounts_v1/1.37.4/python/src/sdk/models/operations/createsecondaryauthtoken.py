import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_secondary_auth_token as shared_accounts_v1_secondary_auth_token


CREATE_SECONDARY_AUTH_TOKEN_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class CreateSecondaryAuthTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSecondaryAuthTokenRequest:
    security: CreateSecondaryAuthTokenSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSecondaryAuthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_secondary_auth_token: Optional[shared_accounts_v1_secondary_auth_token.AccountsV1SecondaryAuthToken] = dataclasses.field(default=None)
    
