import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordermerchantprovidedannotation as shared_ordermerchantprovidedannotation
from ..shared import ordercancellation as shared_ordercancellation
from ..shared import price as shared_price
from ..shared import orderlineitemproduct as shared_orderlineitemproduct
from ..shared import orderlineitemreturninfo as shared_orderlineitemreturninfo
from ..shared import orderreturn as shared_orderreturn
from ..shared import orderlineitemshippingdetails as shared_orderlineitemshippingdetails


@dataclass_json
@dataclasses.dataclass
class OrderLineItem:
    annotations: Optional[list[shared_ordermerchantprovidedannotation.OrderMerchantProvidedAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    cancellations: Optional[list[shared_ordercancellation.OrderCancellation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellations') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_orderlineitemproduct.OrderLineItemProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity_canceled: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityCanceled') }})
    quantity_delivered: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityDelivered') }})
    quantity_ordered: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityOrdered') }})
    quantity_pending: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityPending') }})
    quantity_ready_for_pickup: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReadyForPickup') }})
    quantity_returned: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReturned') }})
    quantity_shipped: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityShipped') }})
    return_info: Optional[shared_orderlineitemreturninfo.OrderLineItemReturnInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInfo') }})
    returns: Optional[list[shared_orderreturn.OrderReturn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returns') }})
    shipping_details: Optional[shared_orderlineitemshippingdetails.OrderLineItemShippingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingDetails') }})
    tax: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    
