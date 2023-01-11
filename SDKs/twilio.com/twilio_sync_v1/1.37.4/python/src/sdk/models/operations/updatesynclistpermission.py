import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_permission as shared_sync_v1_service_sync_list_sync_list_permission


UPDATE_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncListPermissionPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncListPermissionUpdateSyncListPermissionRequest:
    manage: bool = dataclasses.field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = dataclasses.field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = dataclasses.field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclasses.dataclass
class UpdateSyncListPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncListPermissionRequest:
    path_params: UpdateSyncListPermissionPathParams = dataclasses.field()
    security: UpdateSyncListPermissionSecurity = dataclasses.field()
    request: Optional[UpdateSyncListPermissionUpdateSyncListPermissionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncListPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list_sync_list_permission: Optional[shared_sync_v1_service_sync_list_sync_list_permission.SyncV1ServiceSyncListSyncListPermission] = dataclasses.field(default=None)
    
