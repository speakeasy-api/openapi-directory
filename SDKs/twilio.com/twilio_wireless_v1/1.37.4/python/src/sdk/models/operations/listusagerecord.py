import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage_record_enum_granularity_enum as shared_usage_record_enum_granularity_enum
from ..shared import security as shared_security
from ..shared import wireless_v1_sim_usage_record as shared_wireless_v1_sim_usage_record


LIST_USAGE_RECORD_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class ListUsageRecordPathParams:
    sim_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUsageRecordQueryParams:
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    granularity: Optional[shared_usage_record_enum_granularity_enum.UsageRecordEnumGranularityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsageRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsageRecordListUsageRecordResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsageRecordListUsageRecordResponse:
    meta: Optional[ListUsageRecordListUsageRecordResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    usage_records: Optional[list[shared_wireless_v1_sim_usage_record.WirelessV1SimUsageRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclasses.dataclass
class ListUsageRecordRequest:
    path_params: ListUsageRecordPathParams = dataclasses.field()
    query_params: ListUsageRecordQueryParams = dataclasses.field()
    security: ListUsageRecordSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsageRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_usage_record_response: Optional[ListUsageRecordListUsageRecordResponse] = dataclasses.field(default=None)
    
