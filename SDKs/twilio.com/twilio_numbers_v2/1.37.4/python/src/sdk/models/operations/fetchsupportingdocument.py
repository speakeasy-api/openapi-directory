import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_supporting_document as shared_numbers_v2_regulatory_compliance_supporting_document


FETCH_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchSupportingDocumentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSupportingDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSupportingDocumentRequest:
    path_params: FetchSupportingDocumentPathParams = dataclasses.field()
    security: FetchSupportingDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSupportingDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_supporting_document: Optional[shared_numbers_v2_regulatory_compliance_supporting_document.NumbersV2RegulatoryComplianceSupportingDocument] = dataclasses.field(default=None)
    
