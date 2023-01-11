import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v1_service_channel_invite as shared_ip_messaging_v1_service_channel_invite


CREATE_INVITE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateInvitePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInviteCreateInviteRequest:
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class CreateInviteSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateInviteRequest:
    path_params: CreateInvitePathParams = dataclasses.field()
    security: CreateInviteSecurity = dataclasses.field()
    request: Optional[CreateInviteCreateInviteRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v1_service_channel_invite: Optional[shared_ip_messaging_v1_service_channel_invite.IPMessagingV1ServiceChannelInvite] = dataclasses.field(default=None)
    
