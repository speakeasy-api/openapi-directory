import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import events_v1_subscription_subscribed_event as shared_events_v1_subscription_subscribed_event


LIST_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class ListSubscribedEventPathParams:
    subscription_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSubscribedEventQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSubscribedEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSubscribedEventListSubscribedEventResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSubscribedEventListSubscribedEventResponse:
    meta: Optional[ListSubscribedEventListSubscribedEventResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    types: Optional[list[shared_events_v1_subscription_subscribed_event.EventsV1SubscriptionSubscribedEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    

@dataclasses.dataclass
class ListSubscribedEventRequest:
    path_params: ListSubscribedEventPathParams = dataclasses.field()
    query_params: ListSubscribedEventQueryParams = dataclasses.field()
    security: ListSubscribedEventSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_subscribed_event_response: Optional[ListSubscribedEventListSubscribedEventResponse] = dataclasses.field(default=None)
    
