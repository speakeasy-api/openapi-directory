import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment as shared_serverless_v1_service_environment


LIST_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class ListEnvironmentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListEnvironmentQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEnvironmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListEnvironmentListEnvironmentResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEnvironmentListEnvironmentResponse:
    environments: Optional[list[shared_serverless_v1_service_environment.ServerlessV1ServiceEnvironment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    meta: Optional[ListEnvironmentListEnvironmentResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListEnvironmentRequest:
    path_params: ListEnvironmentPathParams = dataclasses.field()
    query_params: ListEnvironmentQueryParams = dataclasses.field()
    security: ListEnvironmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_environment_response: Optional[ListEnvironmentListEnvironmentResponse] = dataclasses.field(default=None)
    
