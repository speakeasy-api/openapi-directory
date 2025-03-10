from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchApplicationPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchApplicationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchApplicationRequest:
    path_params: FetchApplicationPathParams = field()
    security: FetchApplicationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_application: Optional[shared.APIV2010AccountApplication] = field(default=None)
    
