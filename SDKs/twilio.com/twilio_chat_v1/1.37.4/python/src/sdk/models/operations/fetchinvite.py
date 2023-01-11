import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v1_service_channel_invite as shared_chat_v1_service_channel_invite


FETCH_INVITE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchInvitePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchInviteSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchInviteRequest:
    path_params: FetchInvitePathParams = dataclasses.field()
    security: FetchInviteSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v1_service_channel_invite: Optional[shared_chat_v1_service_channel_invite.ChatV1ServiceChannelInvite] = dataclasses.field(default=None)
    
