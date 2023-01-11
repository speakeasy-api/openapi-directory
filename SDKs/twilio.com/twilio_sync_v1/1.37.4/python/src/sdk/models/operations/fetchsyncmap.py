import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map as shared_sync_v1_service_sync_map


FETCH_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchSyncMapPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncMapSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncMapRequest:
    path_params: FetchSyncMapPathParams = dataclasses.field()
    security: FetchSyncMapSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map: Optional[shared_sync_v1_service_sync_map.SyncV1ServiceSyncMap] = dataclasses.field(default=None)
    
