import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoice as shared_invoice
from ..shared import documentinvoiceresponse as shared_documentinvoiceresponse
from ..shared import rawdocumentdata as shared_rawdocumentdata

class SendableDocumentDocumentTypeEnum(str, Enum):
    INVOICE = "invoice"
    INVOICE_RESPONSE = "invoice_response"


@dataclass_json
@dataclasses.dataclass
class SendableDocument:
    r"""SendableDocument
    The document to send.
    """
    
    document_type: SendableDocumentDocumentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    invoice_response: Optional[shared_documentinvoiceresponse.DocumentInvoiceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceResponse') }})
    raw_document_data: Optional[shared_rawdocumentdata.RawDocumentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawDocumentData') }})
    
