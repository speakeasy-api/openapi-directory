import dataclasses
from typing import Optional
from ..shared import getorder as shared_getorder


@dataclasses.dataclass
class GetOrdersOrderIDPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrdersOrderIDRequest:
    path_params: GetOrdersOrderIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrdersOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order: Optional[shared_getorder.GetOrder] = dataclasses.field(default=None)
    
