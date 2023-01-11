import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import interaction_channel_participant_enum_status_enum as shared_interaction_channel_participant_enum_status_enum
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel_interaction_channel_participant as shared_flex_v1_interaction_interaction_channel_interaction_channel_participant


UPDATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class UpdateInteractionChannelParticipantPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest:
    status: shared_interaction_channel_participant_enum_status_enum.InteractionChannelParticipantEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateInteractionChannelParticipantRequest:
    path_params: UpdateInteractionChannelParticipantPathParams = dataclasses.field()
    security: UpdateInteractionChannelParticipantSecurity = dataclasses.field()
    request: Optional[UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateInteractionChannelParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared_flex_v1_interaction_interaction_channel_interaction_channel_participant.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = dataclasses.field(default=None)
    
