import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_user_defined_message as shared_api_v2010_account_call_user_defined_message


CREATE_USER_DEFINED_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateUserDefinedMessagePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUserDefinedMessageCreateUserDefinedMessageRequest:
    content: str = dataclasses.field(metadata={'form': { 'field_name': 'Content' }})
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    

@dataclasses.dataclass
class CreateUserDefinedMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUserDefinedMessageRequest:
    path_params: CreateUserDefinedMessagePathParams = dataclasses.field()
    security: CreateUserDefinedMessageSecurity = dataclasses.field()
    request: Optional[CreateUserDefinedMessageCreateUserDefinedMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUserDefinedMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_user_defined_message: Optional[shared_api_v2010_account_call_user_defined_message.APIV2010AccountCallUserDefinedMessage] = dataclasses.field(default=None)
    
