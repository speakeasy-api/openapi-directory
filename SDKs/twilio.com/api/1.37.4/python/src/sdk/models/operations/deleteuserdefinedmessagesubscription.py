import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteUserDefinedMessageSubscriptionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserDefinedMessageSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUserDefinedMessageSubscriptionRequest:
    path_params: DeleteUserDefinedMessageSubscriptionPathParams = dataclasses.field()
    security: DeleteUserDefinedMessageSubscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUserDefinedMessageSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
