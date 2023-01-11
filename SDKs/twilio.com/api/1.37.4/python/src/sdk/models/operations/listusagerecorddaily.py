import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage_record_daily_enum_category_enum as shared_usage_record_daily_enum_category_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_record_usage_record_daily as shared_api_v2010_account_usage_usage_record_usage_record_daily


LIST_USAGE_RECORD_DAILY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListUsageRecordDailyPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUsageRecordDailyQueryParams:
    category: Optional[shared_usage_record_daily_enum_category_enum.UsageRecordDailyEnumCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    include_subaccounts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncludeSubaccounts', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsageRecordDailySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsageRecordDailyListUsageRecordDailyResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage_records: Optional[list[shared_api_v2010_account_usage_usage_record_usage_record_daily.APIV2010AccountUsageUsageRecordUsageRecordDaily]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclasses.dataclass
class ListUsageRecordDailyRequest:
    path_params: ListUsageRecordDailyPathParams = dataclasses.field()
    query_params: ListUsageRecordDailyQueryParams = dataclasses.field()
    security: ListUsageRecordDailySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsageRecordDailyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_usage_record_daily_response: Optional[ListUsageRecordDailyListUsageRecordDailyResponse] = dataclasses.field(default=None)
    
