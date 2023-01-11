import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel as shared_flex_v1_interaction_interaction_channel


FETCH_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchInteractionChannelPathParams:
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchInteractionChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchInteractionChannelRequest:
    path_params: FetchInteractionChannelPathParams = dataclasses.field()
    security: FetchInteractionChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchInteractionChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction_interaction_channel: Optional[shared_flex_v1_interaction_interaction_channel.FlexV1InteractionInteractionChannel] = dataclasses.field(default=None)
    
