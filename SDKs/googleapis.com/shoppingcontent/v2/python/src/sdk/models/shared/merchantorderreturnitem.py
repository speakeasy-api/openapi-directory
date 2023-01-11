import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customerreturnreason as shared_customerreturnreason
from ..shared import refundreason as shared_refundreason
from ..shared import orderlineitemproduct as shared_orderlineitemproduct


@dataclass_json
@dataclasses.dataclass
class MerchantOrderReturnItem:
    customer_return_reason: Optional[shared_customerreturnreason.CustomerReturnReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerReturnReason') }})
    item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    merchant_return_reason: Optional[shared_refundreason.RefundReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantReturnReason') }})
    product: Optional[shared_orderlineitemproduct.OrderLineItemProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    return_shipment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipmentIds') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
