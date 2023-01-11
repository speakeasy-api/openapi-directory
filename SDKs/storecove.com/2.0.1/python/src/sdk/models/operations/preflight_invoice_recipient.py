import dataclasses
from typing import Any,Optional
from ..shared import invoicerecipientpreflight as shared_invoicerecipientpreflight
from ..shared import preflightinvoicerecipientresult as shared_preflightinvoicerecipientresult


@dataclasses.dataclass
class PreflightInvoiceRecipientRequest:
    request: shared_invoicerecipientpreflight.InvoiceRecipientPreflight = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PreflightInvoiceRecipientResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    preflight_invoice_recipient_result: Optional[shared_preflightinvoicerecipientresult.PreflightInvoiceRecipientResult] = dataclasses.field(default=None)
    
