import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_supporting_document_type as shared_numbers_v2_regulatory_compliance_supporting_document_type


FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchSupportingDocumentTypePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSupportingDocumentTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSupportingDocumentTypeRequest:
    path_params: FetchSupportingDocumentTypePathParams = dataclasses.field()
    security: FetchSupportingDocumentTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSupportingDocumentTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_supporting_document_type: Optional[shared_numbers_v2_regulatory_compliance_supporting_document_type.NumbersV2RegulatoryComplianceSupportingDocumentType] = dataclasses.field(default=None)
    
