import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sync_map_item_enum_query_from_bound_type_enum as shared_sync_map_item_enum_query_from_bound_type_enum
from ..shared import sync_map_item_enum_query_result_order_enum as shared_sync_map_item_enum_query_result_order_enum
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_map_sync_map_item as shared_sync_v1_service_sync_map_sync_map_item


LIST_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class ListSyncMapItemPathParams:
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSyncMapItemQueryParams:
    bounds: Optional[shared_sync_map_item_enum_query_from_bound_type_enum.SyncMapItemEnumQueryFromBoundTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared_sync_map_item_enum_query_result_order_enum.SyncMapItemEnumQueryResultOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncMapItemListSyncMapItemResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncMapItemListSyncMapItemResponse:
    items: Optional[list[shared_sync_v1_service_sync_map_sync_map_item.SyncV1ServiceSyncMapSyncMapItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListSyncMapItemListSyncMapItemResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListSyncMapItemRequest:
    path_params: ListSyncMapItemPathParams = dataclasses.field()
    query_params: ListSyncMapItemQueryParams = dataclasses.field()
    security: ListSyncMapItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sync_map_item_response: Optional[ListSyncMapItemListSyncMapItemResponse] = dataclasses.field(default=None)
    
