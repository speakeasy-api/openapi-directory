import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import member_enum_webhook_enabled_type_enum as shared_member_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import chat_v2_service_channel_member as shared_chat_v2_service_channel_member


CREATE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class CreateMemberPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared_member_enum_webhook_enabled_type_enum.MemberEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMemberCreateMemberRequest:
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    last_consumed_message_index: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    last_consumption_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastConsumptionTimestamp' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class CreateMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMemberRequest:
    headers: CreateMemberHeaders = dataclasses.field()
    path_params: CreateMemberPathParams = dataclasses.field()
    security: CreateMemberSecurity = dataclasses.field()
    request: Optional[CreateMemberCreateMemberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_channel_member: Optional[shared_chat_v2_service_channel_member.ChatV2ServiceChannelMember] = dataclasses.field(default=None)
    
