import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map_sync_map_item as shared_preview_sync_service_sync_map_sync_map_item


CREATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncSyncMapItemPathParams:
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    key: str = dataclasses.field(metadata={'form': { 'field_name': 'Key' }})
    

@dataclasses.dataclass
class CreateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncSyncMapItemRequest:
    path_params: CreateSyncSyncMapItemPathParams = dataclasses.field()
    security: CreateSyncSyncMapItemSecurity = dataclasses.field()
    request: Optional[CreateSyncSyncMapItemCreateSyncSyncMapItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map_sync_map_item: Optional[shared_preview_sync_service_sync_map_sync_map_item.PreviewSyncServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
