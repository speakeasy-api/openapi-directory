import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testordercustomer as shared_testordercustomer
from ..shared import testorderlineitem as shared_testorderlineitem
from ..shared import testorderpaymentmethod as shared_testorderpaymentmethod
from ..shared import orderlegacypromotion as shared_orderlegacypromotion
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class TestOrder:
    customer: Optional[shared_testordercustomer.TestOrderCustomer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    enable_orderinvoices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOrderinvoices') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    line_items: Optional[list[shared_testorderlineitem.TestOrderLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    notification_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationMode') }})
    payment_method: Optional[shared_testorderpaymentmethod.TestOrderPaymentMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    predefined_delivery_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedDeliveryAddress') }})
    predefined_pickup_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedPickupDetails') }})
    promotions: Optional[list[shared_orderlegacypromotion.OrderLegacyPromotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    shipping_cost: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_cost_tax: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCostTax') }})
    shipping_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOption') }})
    
