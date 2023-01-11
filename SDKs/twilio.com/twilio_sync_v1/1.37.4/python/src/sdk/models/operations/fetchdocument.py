import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_document as shared_sync_v1_service_document


FETCH_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchDocumentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDocumentRequest:
    path_params: FetchDocumentPathParams = dataclasses.field()
    security: FetchDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_document: Optional[shared_sync_v1_service_document.SyncV1ServiceDocument] = dataclasses.field(default=None)
    
