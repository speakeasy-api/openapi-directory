import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map as shared_preview_sync_service_sync_map


CREATE_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncSyncMapPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncSyncMapCreateSyncSyncMapRequest:
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSyncSyncMapSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncSyncMapRequest:
    path_params: CreateSyncSyncMapPathParams = dataclasses.field()
    security: CreateSyncSyncMapSecurity = dataclasses.field()
    request: Optional[CreateSyncSyncMapCreateSyncSyncMapRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncSyncMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map: Optional[shared_preview_sync_service_sync_map.PreviewSyncServiceSyncMap] = dataclasses.field(default=None)
    
