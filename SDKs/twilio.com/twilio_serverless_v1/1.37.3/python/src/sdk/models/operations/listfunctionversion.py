from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_FUNCTION_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListFunctionVersionPathParams:
    function_sid: str = field(metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFunctionVersionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFunctionVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListFunctionVersionListFunctionVersionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListFunctionVersionListFunctionVersionResponse:
    function_versions: Optional[List[shared.ServerlessV1ServiceFunctionFunctionVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function_versions') }})
    meta: Optional[ListFunctionVersionListFunctionVersionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListFunctionVersionRequest:
    path_params: ListFunctionVersionPathParams = field()
    query_params: ListFunctionVersionQueryParams = field()
    security: ListFunctionVersionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListFunctionVersionResponse:
    content_type: str = field()
    status_code: int = field()
    list_function_version_response: Optional[ListFunctionVersionListFunctionVersionResponse] = field(default=None)
    
