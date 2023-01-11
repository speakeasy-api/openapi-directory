import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class DeleteSupportingDocumentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSupportingDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSupportingDocumentRequest:
    path_params: DeleteSupportingDocumentPathParams = dataclasses.field()
    security: DeleteSupportingDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSupportingDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
