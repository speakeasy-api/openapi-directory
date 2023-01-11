import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map_sync_map_item as shared_preview_sync_service_sync_map_sync_map_item


FETCH_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncSyncMapItemPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncSyncMapItemRequest:
    path_params: FetchSyncSyncMapItemPathParams = dataclasses.field()
    security: FetchSyncSyncMapItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map_sync_map_item: Optional[shared_preview_sync_service_sync_map_sync_map_item.PreviewSyncServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
