from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USAGE_RECORD_YESTERDAY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListUsageRecordYesterdayPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageRecordYesterdayQueryParams:
    category: Optional[shared.UsageRecordYesterdayEnumCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeSubaccounts', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageRecordYesterdaySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUsageRecordYesterdayRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUsageRecordYesterdayPathParams = field(default=None)
    query_params: ListUsageRecordYesterdayQueryParams = field(default=None)
    security: ListUsageRecordYesterdaySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUsageRecordYesterday200ApplicationJSONListUsageRecordYesterdayResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    usage_records: Optional[List[shared.APIV2010AccountUsageUsageRecordUsageRecordYesterday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_records' }})
    

@dataclass
class ListUsageRecordYesterdayResponses:
    list_usage_record_yesterday_response: Optional[ListUsageRecordYesterday200ApplicationJSONListUsageRecordYesterdayResponse] = field(default=None)
    

@dataclass
class ListUsageRecordYesterdayResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListUsageRecordYesterdayResponses]] = field(default=None)
    status_code: int = field(default=None)
    
