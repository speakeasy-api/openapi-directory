import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testorderlineitemproduct as shared_testorderlineitemproduct
from ..shared import orderlineitemreturninfo as shared_orderlineitemreturninfo
from ..shared import orderlineitemshippingdetails as shared_orderlineitemshippingdetails
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class TestOrderLineItem:
    product: Optional[shared_testorderlineitemproduct.TestOrderLineItemProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity_ordered: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityOrdered') }})
    return_info: Optional[shared_orderlineitemreturninfo.OrderLineItemReturnInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInfo') }})
    shipping_details: Optional[shared_orderlineitemshippingdetails.OrderLineItemShippingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingDetails') }})
    unit_tax: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitTax') }})
    
