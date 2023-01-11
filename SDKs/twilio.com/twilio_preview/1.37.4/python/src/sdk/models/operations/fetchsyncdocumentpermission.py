import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_document_document_permission as shared_preview_sync_service_document_document_permission


FETCH_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncDocumentPermissionPathParams:
    document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncDocumentPermissionRequest:
    path_params: FetchSyncDocumentPermissionPathParams = dataclasses.field()
    security: FetchSyncDocumentPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncDocumentPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_document_document_permission: Optional[shared_preview_sync_service_document_document_permission.PreviewSyncServiceDocumentDocumentPermission] = dataclasses.field(default=None)
    
