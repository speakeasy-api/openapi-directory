import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage_record_enum_granularity_enum as shared_usage_record_enum_granularity_enum
from ..shared import usage_record_enum_group_enum as shared_usage_record_enum_group_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_usage_record as shared_supersim_v1_usage_record


LIST_USAGE_RECORD_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListUsageRecordQueryParams:
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    fleet: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Fleet', 'style': 'form', 'explode': True }})
    granularity: Optional[shared_usage_record_enum_granularity_enum.UsageRecordEnumGranularityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    group: Optional[shared_usage_record_enum_group_enum.UsageRecordEnumGroupEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Group', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Network', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    

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
    usage_records: Optional[list[shared_supersim_v1_usage_record.SupersimV1UsageRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclasses.dataclass
class ListUsageRecordRequest:
    query_params: ListUsageRecordQueryParams = dataclasses.field()
    security: ListUsageRecordSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsageRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_usage_record_response: Optional[ListUsageRecordListUsageRecordResponse] = dataclasses.field(default=None)
    
