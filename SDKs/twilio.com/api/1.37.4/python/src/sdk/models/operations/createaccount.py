import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account as shared_api_v2010_account


CREATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateAccountCreateAccountRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateAccountSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAccountRequest:
    security: CreateAccountSecurity = dataclasses.field()
    request: Optional[CreateAccountCreateAccountRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account: Optional[shared_api_v2010_account.APIV2010Account] = dataclasses.field(default=None)
    
