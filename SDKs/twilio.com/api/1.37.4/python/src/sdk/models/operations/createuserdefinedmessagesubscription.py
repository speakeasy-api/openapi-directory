import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_user_defined_message_subscription as shared_api_v2010_account_call_user_defined_message_subscription


CREATE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateUserDefinedMessageSubscriptionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    
class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest:
    callback: str = dataclasses.field(metadata={'form': { 'field_name': 'Callback' }})
    method: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = dataclasses.field(metadata={'form': { 'field_name': 'Method' }})
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    

@dataclasses.dataclass
class CreateUserDefinedMessageSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUserDefinedMessageSubscriptionRequest:
    path_params: CreateUserDefinedMessageSubscriptionPathParams = dataclasses.field()
    security: CreateUserDefinedMessageSubscriptionSecurity = dataclasses.field()
    request: Optional[CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUserDefinedMessageSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_user_defined_message_subscription: Optional[shared_api_v2010_account_call_user_defined_message_subscription.APIV2010AccountCallUserDefinedMessageSubscription] = dataclasses.field(default=None)
    
