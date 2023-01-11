import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import customersubscriptionupdatemodel as shared_customersubscriptionupdatemodel


@dataclasses.dataclass
class PutConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1CustomersSubscriptionsIDRequests:
    customer_subscription_update_model: Optional[shared_customersubscriptionupdatemodel.CustomerSubscriptionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_subscription_update_model1: Optional[shared_customersubscriptionupdatemodel.CustomerSubscriptionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_subscription_update_model2: Optional[shared_customersubscriptionupdatemodel.CustomerSubscriptionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_subscription_update_model3: Optional[shared_customersubscriptionupdatemodel.CustomerSubscriptionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1CustomersSubscriptionsIDRequest:
    path_params: PutConsumerV1CustomersSubscriptionsIDPathParams = dataclasses.field()
    request: Optional[PutConsumerV1CustomersSubscriptionsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
