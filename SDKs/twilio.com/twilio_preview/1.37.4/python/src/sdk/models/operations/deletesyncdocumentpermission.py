import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncDocumentPermissionPathParams:
    document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncDocumentPermissionRequest:
    path_params: DeleteSyncDocumentPermissionPathParams = dataclasses.field()
    security: DeleteSyncDocumentPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncDocumentPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
