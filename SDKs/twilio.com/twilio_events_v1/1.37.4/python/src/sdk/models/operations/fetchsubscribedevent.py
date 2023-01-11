import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_subscription_subscribed_event as shared_events_v1_subscription_subscribed_event


FETCH_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchSubscribedEventPathParams:
    subscription_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSubscribedEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSubscribedEventRequest:
    path_params: FetchSubscribedEventPathParams = dataclasses.field()
    security: FetchSubscribedEventSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_subscription_subscribed_event: Optional[shared_events_v1_subscription_subscribed_event.EventsV1SubscriptionSubscribedEvent] = dataclasses.field(default=None)
    
