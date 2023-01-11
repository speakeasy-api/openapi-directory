import dataclasses
from typing import Optional
from ..shared import subscription as shared_subscription


@dataclasses.dataclass
class GetSubscriptionByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionByIDRequest:
    path_params: GetSubscriptionByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    
