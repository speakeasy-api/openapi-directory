import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list_sync_list_permission as shared_preview_sync_service_sync_list_sync_list_permission


UPDATE_SYNC_SYNC_LIST_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncSyncListPermissionPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest:
    manage: bool = dataclasses.field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = dataclasses.field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = dataclasses.field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclasses.dataclass
class UpdateSyncSyncListPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncSyncListPermissionRequest:
    path_params: UpdateSyncSyncListPermissionPathParams = dataclasses.field()
    security: UpdateSyncSyncListPermissionSecurity = dataclasses.field()
    request: Optional[UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncSyncListPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_list_sync_list_permission: Optional[shared_preview_sync_service_sync_list_sync_list_permission.PreviewSyncServiceSyncListSyncListPermission] = dataclasses.field(default=None)
    
