import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_outgoing_caller_id as shared_api_v2010_account_outgoing_caller_id


FETCH_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchOutgoingCallerIDPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchOutgoingCallerIDSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchOutgoingCallerIDRequest:
    path_params: FetchOutgoingCallerIDPathParams = dataclasses.field()
    security: FetchOutgoingCallerIDSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchOutgoingCallerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_outgoing_caller_id: Optional[shared_api_v2010_account_outgoing_caller_id.APIV2010AccountOutgoingCallerID] = dataclasses.field(default=None)
    
