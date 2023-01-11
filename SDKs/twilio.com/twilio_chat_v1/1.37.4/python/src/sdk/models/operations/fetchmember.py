import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v1_service_channel_member as shared_chat_v1_service_channel_member


FETCH_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchMemberPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMemberRequest:
    path_params: FetchMemberPathParams = dataclasses.field()
    security: FetchMemberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v1_service_channel_member: Optional[shared_chat_v1_service_channel_member.ChatV1ServiceChannelMember] = dataclasses.field(default=None)
    
