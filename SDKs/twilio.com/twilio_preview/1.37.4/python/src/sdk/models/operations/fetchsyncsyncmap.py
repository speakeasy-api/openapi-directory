import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map as shared_preview_sync_service_sync_map


FETCH_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncSyncMapPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncSyncMapSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncSyncMapRequest:
    path_params: FetchSyncSyncMapPathParams = dataclasses.field()
    security: FetchSyncSyncMapSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncSyncMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map: Optional[shared_preview_sync_service_sync_map.PreviewSyncServiceSyncMap] = dataclasses.field(default=None)
    
