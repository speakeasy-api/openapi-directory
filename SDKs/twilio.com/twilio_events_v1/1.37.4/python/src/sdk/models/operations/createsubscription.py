import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import events_v1_subscription as shared_events_v1_subscription


CREATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class CreateSubscriptionCreateSubscriptionRequest:
    description: str = dataclasses.field(metadata={'form': { 'field_name': 'Description' }})
    sink_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'SinkSid' }})
    types: list[Any] = dataclasses.field(metadata={'form': { 'field_name': 'Types' }})
    

@dataclasses.dataclass
class CreateSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSubscriptionRequest:
    security: CreateSubscriptionSecurity = dataclasses.field()
    request: Optional[CreateSubscriptionCreateSubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_subscription: Optional[shared_events_v1_subscription.EventsV1Subscription] = dataclasses.field(default=None)
    
