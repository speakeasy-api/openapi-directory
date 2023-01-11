import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_call as shared_api_v2010_account_call


FETCH_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchCallPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCallRequest:
    path_params: FetchCallPathParams = dataclasses.field()
    security: FetchCallSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call: Optional[shared_api_v2010_account_call.APIV2010AccountCall] = dataclasses.field(default=None)
    
