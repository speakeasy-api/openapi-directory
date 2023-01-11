import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderstatus_enum as shared_orderstatus_enum


@dataclasses.dataclass
class PutAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutAccountsAccountOrdersCustomerOrderIDRequestBody:
    aux_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aux Price') }})
    customer_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    german_hft_algo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GermanHftAlgo') }})
    mifid2_algo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2Algo') }})
    mifid2_decision_maker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2DecisionMaker') }})
    mifid2_execution_algo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionAlgo') }})
    mifid2_execution_trader: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionTrader') }})
    order_type: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order Type') }})
    orig_customer_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrigCustomerOrderId') }})
    outside_rth: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outside RTH') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    side: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    time_in_force: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time in Force') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON:
    customer_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    order_qty: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderQty') }})
    order_type: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderType') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    side: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    status: Optional[shared_orderstatus_enum.OrderStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    symbol: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Symbol') }})
    warning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclasses.dataclass
class PutAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: PutAccountsAccountOrdersCustomerOrderIDPathParams = dataclasses.field()
    request: PutAccountsAccountOrdersCustomerOrderIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_accounts_account_orders_customer_order_id_200_application_json_objects: Optional[list[PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON]] = dataclasses.field(default=None)
    
