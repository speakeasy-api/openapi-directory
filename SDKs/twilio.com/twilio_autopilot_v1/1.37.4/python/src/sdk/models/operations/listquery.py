import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_query as shared_autopilot_v1_assistant_query


LIST_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class ListQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListQueryQueryParams:
    dialogue_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DialogueSid', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    model_build: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ModelBuild', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListQueryListQueryResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListQueryListQueryResponse:
    meta: Optional[ListQueryListQueryResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    queries: Optional[list[shared_autopilot_v1_assistant_query.AutopilotV1AssistantQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    

@dataclasses.dataclass
class ListQueryRequest:
    path_params: ListQueryPathParams = dataclasses.field()
    query_params: ListQueryQueryParams = dataclasses.field()
    security: ListQuerySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_query_response: Optional[ListQueryListQueryResponse] = dataclasses.field(default=None)
    
