import dataclasses
from typing import Optional
from ..shared import subscription as shared_subscription


@dataclasses.dataclass
class SubscriptionsListResponse:
    r"""SubscriptionsListResponse
    A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
    """
    
    items: Optional[list[shared_subscription.Subscription]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
