import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordershipmentlineitemshipment as shared_ordershipmentlineitemshipment
from ..shared import orderscustombatchrequestentryshiplineitemsshipmentinfo as shared_orderscustombatchrequestentryshiplineitemsshipmentinfo


@dataclass_json
@dataclasses.dataclass
class OrdersShipLineItemsRequest:
    carrier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    line_items: Optional[list[shared_ordershipmentlineitemshipment.OrderShipmentLineItemShipment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    shipment_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentGroupId') }})
    shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    shipment_infos: Optional[list[shared_orderscustombatchrequestentryshiplineitemsshipmentinfo.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentInfos') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
