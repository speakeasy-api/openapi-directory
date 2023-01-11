import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import verify_v2_service_rate_limit as shared_verify_v2_service_rate_limit


LIST_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class ListRateLimitPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRateLimitQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRateLimitSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRateLimitListRateLimitResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRateLimitListRateLimitResponse:
    meta: Optional[ListRateLimitListRateLimitResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rate_limits: Optional[list[shared_verify_v2_service_rate_limit.VerifyV2ServiceRateLimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_limits') }})
    

@dataclasses.dataclass
class ListRateLimitRequest:
    path_params: ListRateLimitPathParams = dataclasses.field()
    query_params: ListRateLimitQueryParams = dataclasses.field()
    security: ListRateLimitSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRateLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_rate_limit_response: Optional[ListRateLimitListRateLimitResponse] = dataclasses.field(default=None)
    
