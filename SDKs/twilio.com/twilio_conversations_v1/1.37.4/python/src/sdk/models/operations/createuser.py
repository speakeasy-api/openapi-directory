import dataclasses
from typing import Optional
from enum import Enum
from ..shared import user_enum_webhook_enabled_type_enum as shared_user_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_user as shared_conversations_v1_user


CREATE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


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
    security: CreateUserSecurity = dataclasses.field()
    request: Optional[CreateUserCreateUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_user: Optional[shared_conversations_v1_user.ConversationsV1User] = dataclasses.field(default=None)
    
