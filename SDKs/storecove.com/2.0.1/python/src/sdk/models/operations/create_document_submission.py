import dataclasses
from typing import Any,Optional
from ..shared import documentsubmission as shared_documentsubmission
from ..shared import documentsubmissionresult as shared_documentsubmissionresult


@dataclasses.dataclass
class CreateDocumentSubmissionRequest:
    request: shared_documentsubmission.DocumentSubmission = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDocumentSubmissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_submission_result: Optional[shared_documentsubmissionresult.DocumentSubmissionResult] = dataclasses.field(default=None)
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    
