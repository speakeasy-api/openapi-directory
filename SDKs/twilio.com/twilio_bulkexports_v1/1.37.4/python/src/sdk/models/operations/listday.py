import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_day as shared_bulkexports_v1_export_day


LIST_DAY_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class ListDayPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDayQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDaySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDayListDayResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDayListDayResponse:
    days: Optional[list[shared_bulkexports_v1_export_day.BulkexportsV1ExportDay]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    meta: Optional[ListDayListDayResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListDayRequest:
    path_params: ListDayPathParams = dataclasses.field()
    query_params: ListDayQueryParams = dataclasses.field()
    security: ListDaySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_day_response: Optional[ListDayListDayResponse] = dataclasses.field(default=None)
    
