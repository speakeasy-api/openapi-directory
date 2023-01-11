import dataclasses
from typing import Optional
from ..shared import subscribetoeventbody as shared_subscribetoeventbody
from ..shared import eventsubscriptionsresponse as shared_eventsubscriptionsresponse


@dataclasses.dataclass
class WhenAResponseIsReceivedRequest:
    request: shared_subscribetoeventbody.SubscribeToEventBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WhenAResponseIsReceivedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_subscriptions_response: Optional[shared_eventsubscriptionsresponse.EventSubscriptionsResponse] = dataclasses.field(default=None)
    
