import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ShowInvoiceSubmissionEvidencePathParams:
    guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowInvoiceSubmissionEvidenceRequest:
    path_params: ShowInvoiceSubmissionEvidencePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowInvoiceSubmissionEvidenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invoice_submission_evidence: Optional[Any] = dataclasses.field(default=None)
    
