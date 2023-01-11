import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sync_map_item_enum_query_from_bound_type_enum as shared_sync_map_item_enum_query_from_bound_type_enum
from ..shared import sync_map_item_enum_query_result_order_enum as shared_sync_map_item_enum_query_result_order_enum
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_map_sync_map_item as shared_preview_sync_service_sync_map_sync_map_item


LIST_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListSyncSyncMapItemPathParams:
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSyncSyncMapItemQueryParams:
    bounds: Optional[shared_sync_map_item_enum_query_from_bound_type_enum.SyncMapItemEnumQueryFromBoundTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared_sync_map_item_enum_query_result_order_enum.SyncMapItemEnumQueryResultOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSyncSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncSyncMapItemListSyncSyncMapItemResponse:
    items: Optional[list[shared_preview_sync_service_sync_map_sync_map_item.PreviewSyncServiceSyncMapSyncMapItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListSyncSyncMapItemListSyncSyncMapItemResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListSyncSyncMapItemRequest:
    path_params: ListSyncSyncMapItemPathParams = dataclasses.field()
    query_params: ListSyncSyncMapItemQueryParams = dataclasses.field()
    security: ListSyncSyncMapItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSyncSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sync_sync_map_item_response: Optional[ListSyncSyncMapItemListSyncSyncMapItemResponse] = dataclasses.field(default=None)
    
