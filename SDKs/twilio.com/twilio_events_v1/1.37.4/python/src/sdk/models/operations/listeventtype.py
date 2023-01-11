import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import events_v1_event_type as shared_events_v1_event_type


LIST_EVENT_TYPE_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class ListEventTypeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    schema_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SchemaId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEventTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListEventTypeListEventTypeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEventTypeListEventTypeResponse:
    meta: Optional[ListEventTypeListEventTypeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    types: Optional[list[shared_events_v1_event_type.EventsV1EventType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    

@dataclasses.dataclass
class ListEventTypeRequest:
    query_params: ListEventTypeQueryParams = dataclasses.field()
    security: ListEventTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListEventTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_event_type_response: Optional[ListEventTypeListEventTypeResponse] = dataclasses.field(default=None)
    
