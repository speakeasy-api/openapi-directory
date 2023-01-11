import dataclasses
from typing import Optional
from ..shared import customersubscriptioninputmodel as shared_customersubscriptioninputmodel
from ..shared import customersubscriptionviewmodel as shared_customersubscriptionviewmodel


@dataclasses.dataclass
class PostConsumerV1CustomersIDSubscriptionsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostConsumerV1CustomersIDSubscriptionsRequests:
    customer_subscription_input_model: Optional[shared_customersubscriptioninputmodel.CustomerSubscriptionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_subscription_input_model1: Optional[shared_customersubscriptioninputmodel.CustomerSubscriptionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_subscription_input_model2: Optional[shared_customersubscriptioninputmodel.CustomerSubscriptionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_subscription_input_model3: Optional[shared_customersubscriptioninputmodel.CustomerSubscriptionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostConsumerV1CustomersIDSubscriptionsRequest:
    path_params: PostConsumerV1CustomersIDSubscriptionsPathParams = dataclasses.field()
    request: Optional[PostConsumerV1CustomersIDSubscriptionsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostConsumerV1CustomersIDSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_subscription_view_model: Optional[shared_customersubscriptionviewmodel.CustomerSubscriptionViewModel] = dataclasses.field(default=None)
    
