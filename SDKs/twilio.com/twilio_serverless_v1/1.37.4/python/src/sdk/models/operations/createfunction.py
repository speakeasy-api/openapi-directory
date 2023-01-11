import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_function as shared_serverless_v1_service_function


CREATE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateFunctionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFunctionCreateFunctionRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateFunctionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFunctionRequest:
    path_params: CreateFunctionPathParams = dataclasses.field()
    security: CreateFunctionSecurity = dataclasses.field()
    request: Optional[CreateFunctionCreateFunctionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFunctionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_function: Optional[shared_serverless_v1_service_function.ServerlessV1ServiceFunction] = dataclasses.field(default=None)
    
