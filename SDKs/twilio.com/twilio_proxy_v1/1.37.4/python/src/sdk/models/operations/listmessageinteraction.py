import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_participant_message_interaction as shared_proxy_v1_service_session_participant_message_interaction


LIST_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class ListMessageInteractionPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMessageInteractionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMessageInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMessageInteractionListMessageInteractionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMessageInteractionListMessageInteractionResponse:
    interactions: Optional[list[shared_proxy_v1_service_session_participant_message_interaction.ProxyV1ServiceSessionParticipantMessageInteraction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    meta: Optional[ListMessageInteractionListMessageInteractionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListMessageInteractionRequest:
    path_params: ListMessageInteractionPathParams = dataclasses.field()
    query_params: ListMessageInteractionQueryParams = dataclasses.field()
    security: ListMessageInteractionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMessageInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_message_interaction_response: Optional[ListMessageInteractionListMessageInteractionResponse] = dataclasses.field(default=None)
    
