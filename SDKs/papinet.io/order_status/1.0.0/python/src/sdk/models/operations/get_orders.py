import dataclasses
from typing import Optional
from enum import Enum
from ..shared import listoforders as shared_listoforders

class GetOrdersOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclasses.dataclass
class GetOrdersQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_status: Optional[GetOrdersOrderStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_of_orders: Optional[shared_listoforders.ListOfOrders] = dataclasses.field(default=None)
    
