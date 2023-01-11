import dataclasses
from typing import Optional
from ..shared import customersubscriptionviewmodel as shared_customersubscriptionviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsIDRequest:
    path_params: GetConsumerV1CustomersSubscriptionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_subscription_view_model: Optional[shared_customersubscriptionviewmodel.CustomerSubscriptionViewModel] = dataclasses.field(default=None)
    
