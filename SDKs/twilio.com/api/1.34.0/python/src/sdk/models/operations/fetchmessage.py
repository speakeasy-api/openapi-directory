from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchMessagePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMessagePathParams = field(default=None)
    security: FetchMessageSecurity = field(default=None)
    

@dataclass
class FetchMessageResponses:
    api_v2010_account_message: Optional[shared.APIV2010AccountMessage] = field(default=None)
    

@dataclass
class FetchMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
