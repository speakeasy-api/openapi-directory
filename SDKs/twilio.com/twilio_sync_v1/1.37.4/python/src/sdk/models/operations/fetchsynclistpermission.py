import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_permission as shared_sync_v1_service_sync_list_sync_list_permission


FETCH_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchSyncListPermissionPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncListPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncListPermissionRequest:
    path_params: FetchSyncListPermissionPathParams = dataclasses.field()
    security: FetchSyncListPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncListPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list_sync_list_permission: Optional[shared_sync_v1_service_sync_list_sync_list_permission.SyncV1ServiceSyncListSyncListPermission] = dataclasses.field(default=None)
    
