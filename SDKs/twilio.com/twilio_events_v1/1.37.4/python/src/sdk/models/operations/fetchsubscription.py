import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_subscription as shared_events_v1_subscription


FETCH_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchSubscriptionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSubscriptionRequest:
    path_params: FetchSubscriptionPathParams = dataclasses.field()
    security: FetchSubscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_subscription: Optional[shared_events_v1_subscription.EventsV1Subscription] = dataclasses.field(default=None)
    
