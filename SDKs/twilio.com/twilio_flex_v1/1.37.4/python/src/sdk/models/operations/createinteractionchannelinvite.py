import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel_interaction_channel_invite as shared_flex_v1_interaction_interaction_channel_interaction_channel_invite


CREATE_INTERACTION_CHANNEL_INVITE_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateInteractionChannelInvitePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest:
    routing: Any = dataclasses.field(metadata={'form': { 'field_name': 'Routing' }})
    

@dataclasses.dataclass
class CreateInteractionChannelInviteSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateInteractionChannelInviteRequest:
    path_params: CreateInteractionChannelInvitePathParams = dataclasses.field()
    security: CreateInteractionChannelInviteSecurity = dataclasses.field()
    request: Optional[CreateInteractionChannelInviteCreateInteractionChannelInviteRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInteractionChannelInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction_interaction_channel_interaction_channel_invite: Optional[shared_flex_v1_interaction_interaction_channel_interaction_channel_invite.FlexV1InteractionInteractionChannelInteractionChannelInvite] = dataclasses.field(default=None)
    
