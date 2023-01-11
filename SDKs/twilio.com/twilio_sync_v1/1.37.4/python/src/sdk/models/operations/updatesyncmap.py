import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map as shared_sync_v1_service_sync_map


UPDATE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncMapPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncMapUpdateSyncMapRequest:
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class UpdateSyncMapSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncMapRequest:
    path_params: UpdateSyncMapPathParams = dataclasses.field()
    security: UpdateSyncMapSecurity = dataclasses.field()
    request: Optional[UpdateSyncMapUpdateSyncMapRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map: Optional[shared_sync_v1_service_sync_map.SyncV1ServiceSyncMap] = dataclasses.field(default=None)
    
