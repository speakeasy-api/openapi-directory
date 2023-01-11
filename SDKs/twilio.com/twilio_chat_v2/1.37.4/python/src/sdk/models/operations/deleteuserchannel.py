import dataclasses
from typing import Optional
from enum import Enum
from ..shared import user_channel_enum_webhook_enabled_type_enum as shared_user_channel_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_USER_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class DeleteUserChannelPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared_user_channel_enum_webhook_enabled_type_enum.UserChannelEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUserChannelRequest:
    headers: DeleteUserChannelHeaders = dataclasses.field()
    path_params: DeleteUserChannelPathParams = dataclasses.field()
    security: DeleteUserChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUserChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
