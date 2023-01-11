import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoicesummary as shared_invoicesummary
from ..shared import shipmentinvoicelineiteminvoice as shared_shipmentinvoicelineiteminvoice


@dataclass_json
@dataclasses.dataclass
class ShipmentInvoice:
    invoice_summary: Optional[shared_invoicesummary.InvoiceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceSummary') }})
    line_item_invoices: Optional[list[shared_shipmentinvoicelineiteminvoice.ShipmentInvoiceLineItemInvoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemInvoices') }})
    shipment_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentGroupId') }})
    
