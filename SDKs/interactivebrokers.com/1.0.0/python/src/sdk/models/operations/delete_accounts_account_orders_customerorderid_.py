import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderstatus_enum as shared_orderstatus_enum


@dataclasses.dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON:
    customer_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    order_qty: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderQty') }})
    order_type: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderType') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    side: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    status: Optional[shared_orderstatus_enum.OrderStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    symbol: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Symbol') }})
    warning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclasses.dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: DeleteAccountsAccountOrdersCustomerOrderIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_accounts_account_orders_customer_order_id_200_application_json_objects: Optional[list[DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON]] = dataclasses.field(default=None)
    
