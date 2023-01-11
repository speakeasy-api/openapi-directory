import dataclasses
from typing import Any,Optional
from enum import Enum

class ListSortEnum(str, Enum):
    CREATED_AT = "createdAt"
    MINUS_CREATED_AT = "-createdAt"
    ORDER_ID = "orderId"
    MINUS_ORDER_ID = "-orderId"
    PRICING_TOTAL = "pricing.total"
    MINUS_PRICING_TOTAL = "-pricing.total"


@dataclasses.dataclass
class ListQueryParams:
    domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent_order_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parentOrderId', 'style': 'form', 'explode': True }})
    payment_profile_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentProfileId', 'style': 'form', 'explode': True }})
    period_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'periodEnd', 'style': 'form', 'explode': True }})
    period_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'periodStart', 'style': 'form', 'explode': True }})
    product_group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'productGroupId', 'style': 'form', 'explode': True }})
    sort: Optional[ListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    x_shopper_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Shopper-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRequest:
    headers: ListHeaders = dataclasses.field()
    query_params: ListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    order_list: Optional[Any] = dataclasses.field(default=None)
    
