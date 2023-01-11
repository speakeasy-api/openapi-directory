import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import call_summaries_enum_processing_state_request_enum as shared_call_summaries_enum_processing_state_request_enum
from ..shared import call_summaries_enum_sort_by_enum as shared_call_summaries_enum_sort_by_enum
from ..shared import security as shared_security
from ..shared import insights_v1_call_summaries as shared_insights_v1_call_summaries


LIST_CALL_SUMMARIES_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListCallSummariesQueryParams:
    abnormal_session: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AbnormalSession', 'style': 'form', 'explode': True }})
    branded: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Branded', 'style': 'form', 'explode': True }})
    call_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CallState', 'style': 'form', 'explode': True }})
    call_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CallType', 'style': 'form', 'explode': True }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    from_carrier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FromCarrier', 'style': 'form', 'explode': True }})
    from_country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FromCountryCode', 'style': 'form', 'explode': True }})
    has_tag: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HasTag', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    processing_state: Optional[shared_call_summaries_enum_processing_state_request_enum.CallSummariesEnumProcessingStateRequestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProcessingState', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_call_summaries_enum_sort_by_enum.CallSummariesEnumSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SortBy', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Subaccount', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    to_carrier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToCarrier', 'style': 'form', 'explode': True }})
    to_country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToCountryCode', 'style': 'form', 'explode': True }})
    verified_caller: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VerifiedCaller', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCallSummariesSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallSummariesListCallSummariesResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallSummariesListCallSummariesResponse:
    call_summaries: Optional[list[shared_insights_v1_call_summaries.InsightsV1CallSummaries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_summaries') }})
    meta: Optional[ListCallSummariesListCallSummariesResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListCallSummariesRequest:
    query_params: ListCallSummariesQueryParams = dataclasses.field()
    security: ListCallSummariesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCallSummariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_call_summaries_response: Optional[ListCallSummariesListCallSummariesResponse] = dataclasses.field(default=None)
    
