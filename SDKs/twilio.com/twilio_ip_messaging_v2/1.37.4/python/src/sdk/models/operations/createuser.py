import dataclasses
from typing import Optional
from enum import Enum
from ..shared import user_enum_webhook_enabled_type_enum as shared_user_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_user as shared_ip_messaging_v2_service_user


CREATE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateUserPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUserHeaders:
    x_twilio_webhook_enabled: Optional[shared_user_enum_webhook_enabled_type_enum.UserEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUserCreateUserRequest:
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class CreateUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUserRequest:
    headers: CreateUserHeaders = dataclasses.field()
    path_params: CreateUserPathParams = dataclasses.field()
    security: CreateUserSecurity = dataclasses.field()
    request: Optional[CreateUserCreateUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_user: Optional[shared_ip_messaging_v2_service_user.IPMessagingV2ServiceUser] = dataclasses.field(default=None)
    
