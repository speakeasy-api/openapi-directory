import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_document as shared_sync_v1_service_document


CREATE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateDocumentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDocumentCreateDocumentRequest:
    data: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Data' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDocumentRequest:
    path_params: CreateDocumentPathParams = dataclasses.field()
    security: CreateDocumentSecurity = dataclasses.field()
    request: Optional[CreateDocumentCreateDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_document: Optional[shared_sync_v1_service_document.SyncV1ServiceDocument] = dataclasses.field(default=None)
    
