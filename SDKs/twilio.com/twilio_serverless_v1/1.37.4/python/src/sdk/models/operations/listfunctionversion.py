import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import serverless_v1_service_function_function_version as shared_serverless_v1_service_function_function_version


LIST_FUNCTION_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class ListFunctionVersionPathParams:
    function_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFunctionVersionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFunctionVersionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListFunctionVersionListFunctionVersionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFunctionVersionListFunctionVersionResponse:
    function_versions: Optional[list[shared_serverless_v1_service_function_function_version.ServerlessV1ServiceFunctionFunctionVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function_versions') }})
    meta: Optional[ListFunctionVersionListFunctionVersionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListFunctionVersionRequest:
    path_params: ListFunctionVersionPathParams = dataclasses.field()
    query_params: ListFunctionVersionQueryParams = dataclasses.field()
    security: ListFunctionVersionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListFunctionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_function_version_response: Optional[ListFunctionVersionListFunctionVersionResponse] = dataclasses.field(default=None)
    
