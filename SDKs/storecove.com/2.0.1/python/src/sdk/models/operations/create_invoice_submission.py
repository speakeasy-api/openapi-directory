import dataclasses
from typing import Any,Optional
from ..shared import invoicesubmission as shared_invoicesubmission
from ..shared import invoicesubmissionresult as shared_invoicesubmissionresult


@dataclasses.dataclass
class CreateInvoiceSubmissionRequest:
    request: shared_invoicesubmission.InvoiceSubmission = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateInvoiceSubmissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    invoice_submission_result: Optional[shared_invoicesubmissionresult.InvoiceSubmissionResult] = dataclasses.field(default=None)
    
