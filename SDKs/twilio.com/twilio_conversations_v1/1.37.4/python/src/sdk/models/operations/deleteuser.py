import dataclasses
from typing import Optional
from enum import Enum
from ..shared import user_enum_webhook_enabled_type_enum as shared_user_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserHeaders:
    x_twilio_webhook_enabled: Optional[shared_user_enum_webhook_enabled_type_enum.UserEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUserRequest:
    headers: DeleteUserHeaders = dataclasses.field()
    path_params: DeleteUserPathParams = dataclasses.field()
    security: DeleteUserSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
