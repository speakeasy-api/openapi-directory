import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map_sync_map_item as shared_preview_sync_service_sync_map_sync_map_item


UPDATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncSyncMapItemPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncSyncMapItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclasses.dataclass
class UpdateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncSyncMapItemRequest:
    headers: UpdateSyncSyncMapItemHeaders = dataclasses.field()
    path_params: UpdateSyncSyncMapItemPathParams = dataclasses.field()
    security: UpdateSyncSyncMapItemSecurity = dataclasses.field()
    request: Optional[UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_map_sync_map_item: Optional[shared_preview_sync_service_sync_map_sync_map_item.PreviewSyncServiceSyncMapSyncMapItem] = dataclasses.field(default=None)
    
