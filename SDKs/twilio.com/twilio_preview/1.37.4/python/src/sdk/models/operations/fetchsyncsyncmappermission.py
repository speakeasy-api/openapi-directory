import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map_sync_map_permission as shared_preview_sync_service_sync_map_sync_map_permission


FETCH_SYNC_SYNC_MAP_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncSyncMapPermissionPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncSyncMapPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncSyncMapPermissionRequest:
    path_params: FetchSyncSyncMapPermissionPathParams = dataclasses.field()
    security: FetchSyncSyncMapPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncSyncMapPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map_sync_map_permission: Optional[shared_preview_sync_service_sync_map_sync_map_permission.PreviewSyncServiceSyncMapSyncMapPermission] = dataclasses.field(default=None)
    
