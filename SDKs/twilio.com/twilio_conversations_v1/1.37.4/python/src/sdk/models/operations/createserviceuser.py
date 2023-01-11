import dataclasses
from typing import Optional
from enum import Enum
from ..shared import service_user_enum_webhook_enabled_type_enum as shared_service_user_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_user as shared_conversations_v1_service_service_user


CREATE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class CreateServiceUserPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_user_enum_webhook_enabled_type_enum.ServiceUserEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateServiceUserCreateServiceUserRequest:
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class CreateServiceUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceUserRequest:
    headers: CreateServiceUserHeaders = dataclasses.field()
    path_params: CreateServiceUserPathParams = dataclasses.field()
    security: CreateServiceUserSecurity = dataclasses.field()
    request: Optional[CreateServiceUserCreateServiceUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_user: Optional[shared_conversations_v1_service_service_user.ConversationsV1ServiceServiceUser] = dataclasses.field(default=None)
    
