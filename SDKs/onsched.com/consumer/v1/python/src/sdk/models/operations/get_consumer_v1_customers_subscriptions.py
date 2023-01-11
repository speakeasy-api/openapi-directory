import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsRequest:
    query_params: GetConsumerV1CustomersSubscriptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_subscription_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
