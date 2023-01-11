import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import insights_v1_conference as shared_insights_v1_conference


LIST_CONFERENCE_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListConferenceQueryParams:
    conference_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ConferenceSid', 'style': 'form', 'explode': True }})
    created_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreatedAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreatedBefore', 'style': 'form', 'explode': True }})
    detected_issues: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DetectedIssues', 'style': 'form', 'explode': True }})
    end_reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndReason', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    mixer_region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MixerRegion', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Subaccount', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConferenceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceListConferenceResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceListConferenceResponse:
    conferences: Optional[list[shared_insights_v1_conference.InsightsV1Conference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferences') }})
    meta: Optional[ListConferenceListConferenceResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListConferenceRequest:
    query_params: ListConferenceQueryParams = dataclasses.field()
    security: ListConferenceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conference_response: Optional[ListConferenceListConferenceResponse] = dataclasses.field(default=None)
    
