import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption as shared_orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption
from ..shared import orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption as shared_orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption
from ..shared import shipmentinvoice as shared_shipmentinvoice


@dataclass_json
@dataclasses.dataclass
class OrderinvoicesCreateRefundInvoiceRequest:
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    refund_only_option: Optional[shared_orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundOnlyOption') }})
    return_option: Optional[shared_orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnOption') }})
    shipment_invoices: Optional[list[shared_shipmentinvoice.ShipmentInvoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentInvoices') }})
    
