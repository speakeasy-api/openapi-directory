import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel_interaction_channel_invite as shared_flex_v1_interaction_interaction_channel_interaction_channel_invite


LIST_INTERACTION_CHANNEL_INVITE_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class ListInteractionChannelInvitePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListInteractionChannelInviteQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListInteractionChannelInviteSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInteractionChannelInviteListInteractionChannelInviteResponse:
    invites: Optional[list[shared_flex_v1_interaction_interaction_channel_interaction_channel_invite.FlexV1InteractionInteractionChannelInteractionChannelInvite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invites') }})
    meta: Optional[ListInteractionChannelInviteListInteractionChannelInviteResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListInteractionChannelInviteRequest:
    path_params: ListInteractionChannelInvitePathParams = dataclasses.field()
    query_params: ListInteractionChannelInviteQueryParams = dataclasses.field()
    security: ListInteractionChannelInviteSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListInteractionChannelInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_interaction_channel_invite_response: Optional[ListInteractionChannelInviteListInteractionChannelInviteResponse] = dataclasses.field(default=None)
    
