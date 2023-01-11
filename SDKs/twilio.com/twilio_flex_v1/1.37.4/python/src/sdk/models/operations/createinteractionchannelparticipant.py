import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import interaction_channel_participant_enum_type_enum as shared_interaction_channel_participant_enum_type_enum
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel_interaction_channel_participant as shared_flex_v1_interaction_interaction_channel_interaction_channel_participant


CREATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateInteractionChannelParticipantPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest:
    media_properties: Any = dataclasses.field(metadata={'form': { 'field_name': 'MediaProperties' }})
    type: shared_interaction_channel_participant_enum_type_enum.InteractionChannelParticipantEnumTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclasses.dataclass
class CreateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateInteractionChannelParticipantRequest:
    path_params: CreateInteractionChannelParticipantPathParams = dataclasses.field()
    security: CreateInteractionChannelParticipantSecurity = dataclasses.field()
    request: Optional[CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInteractionChannelParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared_flex_v1_interaction_interaction_channel_interaction_channel_participant.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = dataclasses.field(default=None)
    
