import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import events_v1_sink as shared_events_v1_sink


LIST_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class ListSinkQueryParams:
    in_use: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InUse', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSinkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSinkListSinkResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSinkListSinkResponse:
    meta: Optional[ListSinkListSinkResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sinks: Optional[list[shared_events_v1_sink.EventsV1Sink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sinks') }})
    

@dataclasses.dataclass
class ListSinkRequest:
    query_params: ListSinkQueryParams = dataclasses.field()
    security: ListSinkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sink_response: Optional[ListSinkListSinkResponse] = dataclasses.field(default=None)
    
