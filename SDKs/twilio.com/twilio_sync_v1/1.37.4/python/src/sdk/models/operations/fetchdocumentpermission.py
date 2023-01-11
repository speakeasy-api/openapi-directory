import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_document_document_permission as shared_sync_v1_service_document_document_permission


FETCH_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchDocumentPermissionPathParams:
    document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDocumentPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDocumentPermissionRequest:
    path_params: FetchDocumentPermissionPathParams = dataclasses.field()
    security: FetchDocumentPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDocumentPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_document_document_permission: Optional[shared_sync_v1_service_document_document_permission.SyncV1ServiceDocumentDocumentPermission] = dataclasses.field(default=None)
    
