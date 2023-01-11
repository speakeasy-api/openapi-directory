import dataclasses
from typing import Optional
from ..shared import eventsubscriptionsresponse as shared_eventsubscriptionsresponse


@dataclasses.dataclass
class GetEventSubscriptionsPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventSubscriptionsRequest:
    path_params: GetEventSubscriptionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_subscriptions_response: Optional[shared_eventsubscriptionsresponse.EventSubscriptionsResponse] = dataclasses.field(default=None)
    
