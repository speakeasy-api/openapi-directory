import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v1_service_channel_member as shared_chat_v1_service_channel_member


UPDATE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateMemberPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMemberUpdateMemberRequest:
    last_consumed_message_index: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = dataclasses.field()
    security: UpdateMemberSecurity = dataclasses.field()
    request: Optional[UpdateMemberUpdateMemberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v1_service_channel_member: Optional[shared_chat_v1_service_channel_member.ChatV1ServiceChannelMember] = dataclasses.field(default=None)
    
