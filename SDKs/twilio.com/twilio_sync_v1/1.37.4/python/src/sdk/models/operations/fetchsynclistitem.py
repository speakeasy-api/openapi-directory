import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_item as shared_sync_v1_service_sync_list_sync_list_item


FETCH_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchSyncListItemPathParams:
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncListItemRequest:
    path_params: FetchSyncListItemPathParams = dataclasses.field()
    security: FetchSyncListItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list_sync_list_item: Optional[shared_sync_v1_service_sync_list_sync_list_item.SyncV1ServiceSyncListSyncListItem] = dataclasses.field(default=None)
    
