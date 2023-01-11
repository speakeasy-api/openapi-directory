import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_document as shared_preview_sync_service_document


CREATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncDocumentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncDocumentCreateSyncDocumentRequest:
    data: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Data' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSyncDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncDocumentRequest:
    path_params: CreateSyncDocumentPathParams = dataclasses.field()
    security: CreateSyncDocumentSecurity = dataclasses.field()
    request: Optional[CreateSyncDocumentCreateSyncDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_document: Optional[shared_preview_sync_service_document.PreviewSyncServiceDocument] = dataclasses.field(default=None)
    
