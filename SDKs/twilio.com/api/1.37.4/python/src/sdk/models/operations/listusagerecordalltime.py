import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage_record_all_time_enum_category_enum as shared_usage_record_all_time_enum_category_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_record_usage_record_all_time as shared_api_v2010_account_usage_usage_record_usage_record_all_time


LIST_USAGE_RECORD_ALL_TIME_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListUsageRecordAllTimePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUsageRecordAllTimeQueryParams:
    category: Optional[shared_usage_record_all_time_enum_category_enum.UsageRecordAllTimeEnumCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    include_subaccounts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncludeSubaccounts', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsageRecordAllTimeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsageRecordAllTimeListUsageRecordAllTimeResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage_records: Optional[list[shared_api_v2010_account_usage_usage_record_usage_record_all_time.APIV2010AccountUsageUsageRecordUsageRecordAllTime]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclasses.dataclass
class ListUsageRecordAllTimeRequest:
    path_params: ListUsageRecordAllTimePathParams = dataclasses.field()
    query_params: ListUsageRecordAllTimeQueryParams = dataclasses.field()
    security: ListUsageRecordAllTimeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsageRecordAllTimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_usage_record_all_time_response: Optional[ListUsageRecordAllTimeListUsageRecordAllTimeResponse] = dataclasses.field(default=None)
    
