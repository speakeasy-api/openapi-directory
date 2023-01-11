import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SECONDARY_AUTH_TOKEN_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class DeleteSecondaryAuthTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSecondaryAuthTokenRequest:
    security: DeleteSecondaryAuthTokenSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSecondaryAuthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
