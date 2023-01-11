import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_item as shared_sync_v1_service_sync_list_sync_list_item


UPDATE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncListItemPathParams:
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncListItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncListItemUpdateSyncListItemRequest:
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    data: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Data' }})
    item_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class UpdateSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncListItemRequest:
    headers: UpdateSyncListItemHeaders = dataclasses.field()
    path_params: UpdateSyncListItemPathParams = dataclasses.field()
    security: UpdateSyncListItemSecurity = dataclasses.field()
    request: Optional[UpdateSyncListItemUpdateSyncListItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list_sync_list_item: Optional[shared_sync_v1_service_sync_list_sync_list_item.SyncV1ServiceSyncListSyncListItem] = dataclasses.field(default=None)
    
