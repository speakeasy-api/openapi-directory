import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_supporting_document as shared_trusthub_v1_supporting_document


CREATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateSupportingDocumentCreateSupportingDocumentRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    type: str = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclasses.dataclass
class CreateSupportingDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSupportingDocumentRequest:
    security: CreateSupportingDocumentSecurity = dataclasses.field()
    request: Optional[CreateSupportingDocumentCreateSupportingDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSupportingDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_supporting_document: Optional[shared_trusthub_v1_supporting_document.TrusthubV1SupportingDocument] = dataclasses.field(default=None)
    
