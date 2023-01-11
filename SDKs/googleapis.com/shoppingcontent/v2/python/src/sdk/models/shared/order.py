import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordercustomer as shared_ordercustomer
from ..shared import orderdeliverydetails as shared_orderdeliverydetails
from ..shared import orderlineitem as shared_orderlineitem
from ..shared import price as shared_price
from ..shared import orderpaymentmethod as shared_orderpaymentmethod
from ..shared import orderpickupdetails as shared_orderpickupdetails
from ..shared import orderlegacypromotion as shared_orderlegacypromotion
from ..shared import orderrefund as shared_orderrefund
from ..shared import ordershipment as shared_ordershipment


@dataclass_json
@dataclasses.dataclass
class Order:
    r"""Order
    Order. Production access (all methods) requires the order manager role. Sandbox access does not.
    """
    
    acknowledged: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledged') }})
    channel_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    customer: Optional[shared_ordercustomer.OrderCustomer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    delivery_details: Optional[shared_orderdeliverydetails.OrderDeliveryDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDetails') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    line_items: Optional[list[shared_orderlineitem.OrderLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    net_amount: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netAmount') }})
    payment_method: Optional[shared_orderpaymentmethod.OrderPaymentMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    payment_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentStatus') }})
    pickup_details: Optional[shared_orderpickupdetails.OrderPickupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupDetails') }})
    placed_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placedDate') }})
    promotions: Optional[list[shared_orderlegacypromotion.OrderLegacyPromotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    refunds: Optional[list[shared_orderrefund.OrderRefund]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    shipments: Optional[list[shared_ordershipment.OrderShipment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    shipping_cost: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_cost_tax: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCostTax') }})
    shipping_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOption') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax_collector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCollector') }})
    
