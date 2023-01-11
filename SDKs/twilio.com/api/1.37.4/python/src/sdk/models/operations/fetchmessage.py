import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_message as shared_api_v2010_account_message


FETCH_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchMessagePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMessageRequest:
    path_params: FetchMessagePathParams = dataclasses.field()
    security: FetchMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_message: Optional[shared_api_v2010_account_message.APIV2010AccountMessage] = dataclasses.field(default=None)
    
