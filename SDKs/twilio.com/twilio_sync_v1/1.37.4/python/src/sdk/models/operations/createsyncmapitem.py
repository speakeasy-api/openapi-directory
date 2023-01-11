import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map_sync_map_item as shared_sync_v1_service_sync_map_sync_map_item


CREATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateSyncMapItemPathParams:
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncMapItemCreateSyncMapItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    key: str = dataclasses.field(metadata={'form': { 'field_name': 'Key' }})
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    item_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreateSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncMapItemRequest:
    path_params: CreateSyncMapItemPathParams = dataclasses.field()
    security: CreateSyncMapItemSecurity = dataclasses.field()
    request: Optional[CreateSyncMapItemCreateSyncMapItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared_sync_v1_service_sync_map_sync_map_item.SyncV1ServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
