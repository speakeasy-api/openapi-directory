import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_item as shared_sync_v1_service_sync_list_sync_list_item


CREATE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateSyncListItemPathParams:
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncListItemCreateSyncListItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    item_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreateSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncListItemRequest:
    path_params: CreateSyncListItemPathParams = dataclasses.field()
    security: CreateSyncListItemSecurity = dataclasses.field()
    request: Optional[CreateSyncListItemCreateSyncListItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list_sync_list_item: Optional[shared_sync_v1_service_sync_list_sync_list_item.SyncV1ServiceSyncListSyncListItem] = dataclasses.field(default=None)
    
