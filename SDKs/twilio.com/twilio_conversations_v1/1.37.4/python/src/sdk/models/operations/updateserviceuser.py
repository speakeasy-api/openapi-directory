import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_user_enum_webhook_enabled_type_enum as shared_service_user_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_user as shared_conversations_v1_service_service_user


UPDATE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceUserPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_user_enum_webhook_enabled_type_enum.ServiceUserEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUserUpdateServiceUserRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class UpdateServiceUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceUserRequest:
    headers: UpdateServiceUserHeaders = dataclasses.field()
    path_params: UpdateServiceUserPathParams = dataclasses.field()
    security: UpdateServiceUserSecurity = dataclasses.field()
    request: Optional[UpdateServiceUserUpdateServiceUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_user: Optional[shared_conversations_v1_service_service_user.ConversationsV1ServiceServiceUser] = dataclasses.field(default=None)
    
