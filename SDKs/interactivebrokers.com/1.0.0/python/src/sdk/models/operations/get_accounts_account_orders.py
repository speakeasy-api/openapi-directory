import dataclasses
from typing import Optional
from ..shared import orderstate as shared_orderstate


@dataclasses.dataclass
class GetAccountsAccountOrdersPathParams:
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountOrdersRequest:
    path_params: GetAccountsAccountOrdersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_states: Optional[list[shared_orderstate.OrderState]] = dataclasses.field(default=None)
    
