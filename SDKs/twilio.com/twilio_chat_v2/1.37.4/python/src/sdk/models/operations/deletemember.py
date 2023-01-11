import dataclasses
from typing import Optional
from enum import Enum
from ..shared import member_enum_webhook_enabled_type_enum as shared_member_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class DeleteMemberPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared_member_enum_webhook_enabled_type_enum.MemberEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMemberRequest:
    headers: DeleteMemberHeaders = dataclasses.field()
    path_params: DeleteMemberPathParams = dataclasses.field()
    security: DeleteMemberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
