import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_function_function_version as shared_serverless_v1_service_function_function_version


FETCH_FUNCTION_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchFunctionVersionPathParams:
    function_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFunctionVersionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFunctionVersionRequest:
    path_params: FetchFunctionVersionPathParams = dataclasses.field()
    security: FetchFunctionVersionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFunctionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_function_function_version: Optional[shared_serverless_v1_service_function_function_version.ServerlessV1ServiceFunctionFunctionVersion] = dataclasses.field(default=None)
    
