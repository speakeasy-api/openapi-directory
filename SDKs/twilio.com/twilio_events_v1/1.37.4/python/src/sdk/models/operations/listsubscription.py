import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import events_v1_subscription as shared_events_v1_subscription


LIST_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class ListSubscriptionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sink_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SinkSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSubscriptionListSubscriptionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSubscriptionListSubscriptionResponse:
    meta: Optional[ListSubscriptionListSubscriptionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    subscriptions: Optional[list[shared_events_v1_subscription.EventsV1Subscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    

@dataclasses.dataclass
class ListSubscriptionRequest:
    query_params: ListSubscriptionQueryParams = dataclasses.field()
    security: ListSubscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_subscription_response: Optional[ListSubscriptionListSubscriptionResponse] = dataclasses.field(default=None)
    
