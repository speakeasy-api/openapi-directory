import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map_sync_map_item as shared_sync_v1_service_sync_map_sync_map_item


UPDATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncMapItemPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncMapItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncMapItemUpdateSyncMapItemRequest:
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    data: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Data' }})
    item_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class UpdateSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncMapItemRequest:
    headers: UpdateSyncMapItemHeaders = dataclasses.field()
    path_params: UpdateSyncMapItemPathParams = dataclasses.field()
    security: UpdateSyncMapItemSecurity = dataclasses.field()
    request: Optional[UpdateSyncMapItemUpdateSyncMapItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared_sync_v1_service_sync_map_sync_map_item.SyncV1ServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
