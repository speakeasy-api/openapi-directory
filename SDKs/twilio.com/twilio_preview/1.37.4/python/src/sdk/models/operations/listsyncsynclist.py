import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list as shared_preview_sync_service_sync_list


LIST_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListSyncSyncListPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSyncSyncListQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSyncSyncListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncSyncListListSyncSyncListResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncSyncListListSyncSyncListResponse:
    lists: Optional[list[shared_preview_sync_service_sync_list.PreviewSyncServiceSyncList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    meta: Optional[ListSyncSyncListListSyncSyncListResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListSyncSyncListRequest:
    path_params: ListSyncSyncListPathParams = dataclasses.field()
    query_params: ListSyncSyncListQueryParams = dataclasses.field()
    security: ListSyncSyncListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSyncSyncListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sync_sync_list_response: Optional[ListSyncSyncListListSyncSyncListResponse] = dataclasses.field(default=None)
    
