import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map_sync_map_item as shared_sync_v1_service_sync_map_sync_map_item


FETCH_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchSyncMapItemPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncMapItemRequest:
    path_params: FetchSyncMapItemPathParams = dataclasses.field()
    security: FetchSyncMapItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared_sync_v1_service_sync_map_sync_map_item.SyncV1ServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
