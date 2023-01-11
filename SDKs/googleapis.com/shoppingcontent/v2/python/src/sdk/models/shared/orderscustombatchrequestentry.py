import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderscustombatchrequestentrycancel as shared_orderscustombatchrequestentrycancel
from ..shared import orderscustombatchrequestentrycancellineitem as shared_orderscustombatchrequestentrycancellineitem
from ..shared import orderscustombatchrequestentryinstorerefundlineitem as shared_orderscustombatchrequestentryinstorerefundlineitem
from ..shared import orderscustombatchrequestentryrefund as shared_orderscustombatchrequestentryrefund
from ..shared import orderscustombatchrequestentryrejectreturnlineitem as shared_orderscustombatchrequestentryrejectreturnlineitem
from ..shared import orderscustombatchrequestentryreturnlineitem as shared_orderscustombatchrequestentryreturnlineitem
from ..shared import orderscustombatchrequestentryreturnrefundlineitem as shared_orderscustombatchrequestentryreturnrefundlineitem
from ..shared import orderscustombatchrequestentrysetlineitemmetadata as shared_orderscustombatchrequestentrysetlineitemmetadata
from ..shared import orderscustombatchrequestentryshiplineitems as shared_orderscustombatchrequestentryshiplineitems
from ..shared import orderscustombatchrequestentryupdatelineitemshippingdetails as shared_orderscustombatchrequestentryupdatelineitemshippingdetails
from ..shared import orderscustombatchrequestentryupdateshipment as shared_orderscustombatchrequestentryupdateshipment


@dataclass_json
@dataclasses.dataclass
class OrdersCustomBatchRequestEntry:
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    cancel: Optional[shared_orderscustombatchrequestentrycancel.OrdersCustomBatchRequestEntryCancel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel') }})
    cancel_line_item: Optional[shared_orderscustombatchrequestentrycancellineitem.OrdersCustomBatchRequestEntryCancelLineItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelLineItem') }})
    in_store_refund_line_item: Optional[shared_orderscustombatchrequestentryinstorerefundlineitem.OrdersCustomBatchRequestEntryInStoreRefundLineItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inStoreRefundLineItem') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    refund: Optional[shared_orderscustombatchrequestentryrefund.OrdersCustomBatchRequestEntryRefund] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund') }})
    reject_return_line_item: Optional[shared_orderscustombatchrequestentryrejectreturnlineitem.OrdersCustomBatchRequestEntryRejectReturnLineItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectReturnLineItem') }})
    return_line_item: Optional[shared_orderscustombatchrequestentryreturnlineitem.OrdersCustomBatchRequestEntryReturnLineItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnLineItem') }})
    return_refund_line_item: Optional[shared_orderscustombatchrequestentryreturnrefundlineitem.OrdersCustomBatchRequestEntryReturnRefundLineItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnRefundLineItem') }})
    set_line_item_metadata: Optional[shared_orderscustombatchrequestentrysetlineitemmetadata.OrdersCustomBatchRequestEntrySetLineItemMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setLineItemMetadata') }})
    ship_line_items: Optional[shared_orderscustombatchrequestentryshiplineitems.OrdersCustomBatchRequestEntryShipLineItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipLineItems') }})
    update_line_item_shipping_details: Optional[shared_orderscustombatchrequestentryupdatelineitemshippingdetails.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLineItemShippingDetails') }})
    update_shipment: Optional[shared_orderscustombatchrequestentryupdateshipment.OrdersCustomBatchRequestEntryUpdateShipment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateShipment') }})
    
