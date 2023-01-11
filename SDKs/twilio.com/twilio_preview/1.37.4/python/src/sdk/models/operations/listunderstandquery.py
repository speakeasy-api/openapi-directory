import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_query as shared_preview_understand_assistant_query


LIST_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListUnderstandQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUnderstandQueryQueryParams:
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    model_build: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ModelBuild', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUnderstandQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUnderstandQueryListUnderstandQueryResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUnderstandQueryListUnderstandQueryResponse:
    meta: Optional[ListUnderstandQueryListUnderstandQueryResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    queries: Optional[list[shared_preview_understand_assistant_query.PreviewUnderstandAssistantQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    

@dataclasses.dataclass
class ListUnderstandQueryRequest:
    path_params: ListUnderstandQueryPathParams = dataclasses.field()
    query_params: ListUnderstandQueryQueryParams = dataclasses.field()
    security: ListUnderstandQuerySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUnderstandQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_understand_query_response: Optional[ListUnderstandQueryListUnderstandQueryResponse] = dataclasses.field(default=None)
    
