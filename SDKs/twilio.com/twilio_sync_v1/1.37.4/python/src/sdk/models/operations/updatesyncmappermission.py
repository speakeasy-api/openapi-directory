import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map_sync_map_permission as shared_sync_v1_service_sync_map_sync_map_permission


UPDATE_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncMapPermissionPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest:
    manage: bool = dataclasses.field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = dataclasses.field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = dataclasses.field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclasses.dataclass
class UpdateSyncMapPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncMapPermissionRequest:
    path_params: UpdateSyncMapPermissionPathParams = dataclasses.field()
    security: UpdateSyncMapPermissionSecurity = dataclasses.field()
    request: Optional[UpdateSyncMapPermissionUpdateSyncMapPermissionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncMapPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map_sync_map_permission: Optional[shared_sync_v1_service_sync_map_sync_map_permission.SyncV1ServiceSyncMapSyncMapPermission] = dataclasses.field(default=None)
    
