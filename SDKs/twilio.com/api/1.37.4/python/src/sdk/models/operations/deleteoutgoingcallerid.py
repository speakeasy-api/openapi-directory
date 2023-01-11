import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteOutgoingCallerIDPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOutgoingCallerIDSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteOutgoingCallerIDRequest:
    path_params: DeleteOutgoingCallerIDPathParams = dataclasses.field()
    security: DeleteOutgoingCallerIDSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteOutgoingCallerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
