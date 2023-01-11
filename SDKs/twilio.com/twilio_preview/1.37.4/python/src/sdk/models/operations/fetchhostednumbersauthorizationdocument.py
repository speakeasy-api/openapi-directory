import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_authorization_document as shared_preview_hosted_numbers_authorization_document


FETCH_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchHostedNumbersAuthorizationDocumentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchHostedNumbersAuthorizationDocumentRequest:
    path_params: FetchHostedNumbersAuthorizationDocumentPathParams = dataclasses.field()
    security: FetchHostedNumbersAuthorizationDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchHostedNumbersAuthorizationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_authorization_document: Optional[shared_preview_hosted_numbers_authorization_document.PreviewHostedNumbersAuthorizationDocument] = dataclasses.field(default=None)
    
