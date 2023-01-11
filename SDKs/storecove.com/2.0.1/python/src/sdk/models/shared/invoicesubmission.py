import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachment as shared_attachment
from ..shared import invoice as shared_invoice
from ..shared import invoicedata as shared_invoicedata
from ..shared import invoicerecipient as shared_invoicerecipient
from ..shared import routing as shared_routing

class InvoiceSubmissionModeEnum(str, Enum):
    DIRECT = "direct"


@dataclass_json
@dataclasses.dataclass
class InvoiceSubmission:
    r"""InvoiceSubmission
    The invoice you want Storecove to process, with some meta-data.
    """
    
    attachments: Optional[list[shared_attachment.Attachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    create_primary_image: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPrimaryImage') }})
    document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentUrl') }})
    idempotency_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotencyGuid') }})
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    invoice_data: Optional[shared_invoicedata.InvoiceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceData') }})
    invoice_recipient: Optional[shared_invoicerecipient.InvoiceRecipient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceRecipient') }})
    legal_entity_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalEntityId') }})
    legal_supplier_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalSupplierId') }})
    mode: Optional[InvoiceSubmissionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    routing: Optional[shared_routing.Routing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    supplier_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierId') }})
    
