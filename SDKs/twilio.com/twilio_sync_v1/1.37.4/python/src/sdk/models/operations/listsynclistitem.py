import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sync_list_item_enum_query_from_bound_type_enum as shared_sync_list_item_enum_query_from_bound_type_enum
from ..shared import sync_list_item_enum_query_result_order_enum as shared_sync_list_item_enum_query_result_order_enum
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list_sync_list_item as shared_sync_v1_service_sync_list_sync_list_item


LIST_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class ListSyncListItemPathParams:
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSyncListItemQueryParams:
    bounds: Optional[shared_sync_list_item_enum_query_from_bound_type_enum.SyncListItemEnumQueryFromBoundTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared_sync_list_item_enum_query_result_order_enum.SyncListItemEnumQueryResultOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncListItemListSyncListItemResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncListItemListSyncListItemResponse:
    items: Optional[list[shared_sync_v1_service_sync_list_sync_list_item.SyncV1ServiceSyncListSyncListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListSyncListItemListSyncListItemResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListSyncListItemRequest:
    path_params: ListSyncListItemPathParams = dataclasses.field()
    query_params: ListSyncListItemQueryParams = dataclasses.field()
    security: ListSyncListItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sync_list_item_response: Optional[ListSyncListItemListSyncListItemResponse] = dataclasses.field(default=None)
    
