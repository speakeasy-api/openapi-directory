import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unitinvoice as shared_unitinvoice


@dataclass_json
@dataclasses.dataclass
class ShipmentInvoiceLineItemInvoice:
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    shipment_unit_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentUnitIds') }})
    unit_invoice: Optional[shared_unitinvoice.UnitInvoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitInvoice') }})
    
