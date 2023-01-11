import dataclasses
from typing import Optional
from ..shared import orderstate as shared_orderstate


@dataclasses.dataclass
class GetAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: GetAccountsAccountOrdersCustomerOrderIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_states: Optional[list[shared_orderstate.OrderState]] = dataclasses.field(default=None)
    
