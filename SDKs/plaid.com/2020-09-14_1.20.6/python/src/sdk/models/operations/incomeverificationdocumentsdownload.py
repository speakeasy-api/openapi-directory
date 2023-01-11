import dataclasses
from typing import Optional
from ..shared import incomeverificationdocumentsdownloadrequest as shared_incomeverificationdocumentsdownloadrequest


@dataclasses.dataclass
class IncomeVerificationDocumentsDownloadRequest:
    request: shared_incomeverificationdocumentsdownloadrequest.IncomeVerificationDocumentsDownloadRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncomeVerificationDocumentsDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    income_verification_documents_download_200_application_zip_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
