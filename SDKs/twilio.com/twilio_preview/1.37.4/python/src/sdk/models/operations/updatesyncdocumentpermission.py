import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_document_document_permission as shared_preview_sync_service_document_document_permission


UPDATE_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncDocumentPermissionPathParams:
    document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest:
    manage: bool = dataclasses.field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = dataclasses.field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = dataclasses.field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclasses.dataclass
class UpdateSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncDocumentPermissionRequest:
    path_params: UpdateSyncDocumentPermissionPathParams = dataclasses.field()
    security: UpdateSyncDocumentPermissionSecurity = dataclasses.field()
    request: Optional[UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncDocumentPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_document_document_permission: Optional[shared_preview_sync_service_document_document_permission.PreviewSyncServiceDocumentDocumentPermission] = dataclasses.field(default=None)
    
