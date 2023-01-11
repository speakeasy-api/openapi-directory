import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account_usage_record_enum_granularity_enum as shared_account_usage_record_enum_granularity_enum
from ..shared import security as shared_security
from ..shared import wireless_v1_account_usage_record as shared_wireless_v1_account_usage_record


LIST_ACCOUNT_USAGE_RECORD_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class ListAccountUsageRecordQueryParams:
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    granularity: Optional[shared_account_usage_record_enum_granularity_enum.AccountUsageRecordEnumGranularityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAccountUsageRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountUsageRecordListAccountUsageRecordResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountUsageRecordListAccountUsageRecordResponse:
    meta: Optional[ListAccountUsageRecordListAccountUsageRecordResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    usage_records: Optional[list[shared_wireless_v1_account_usage_record.WirelessV1AccountUsageRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclasses.dataclass
class ListAccountUsageRecordRequest:
    query_params: ListAccountUsageRecordQueryParams = dataclasses.field()
    security: ListAccountUsageRecordSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAccountUsageRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_account_usage_record_response: Optional[ListAccountUsageRecordListAccountUsageRecordResponse] = dataclasses.field(default=None)
    
