import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel_interaction_channel_participant as shared_flex_v1_interaction_interaction_channel_interaction_channel_participant


LIST_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class ListInteractionChannelParticipantPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListInteractionChannelParticipantQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInteractionChannelParticipantListInteractionChannelParticipantResponse:
    meta: Optional[ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[list[shared_flex_v1_interaction_interaction_channel_interaction_channel_participant.FlexV1InteractionInteractionChannelInteractionChannelParticipant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclasses.dataclass
class ListInteractionChannelParticipantRequest:
    path_params: ListInteractionChannelParticipantPathParams = dataclasses.field()
    query_params: ListInteractionChannelParticipantQueryParams = dataclasses.field()
    security: ListInteractionChannelParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListInteractionChannelParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_interaction_channel_participant_response: Optional[ListInteractionChannelParticipantListInteractionChannelParticipantResponse] = dataclasses.field(default=None)
    
