import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment_variable as shared_serverless_v1_service_environment_variable


CREATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateVariablePathParams:
    environment_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVariableCreateVariableRequest:
    key: str = dataclasses.field(metadata={'form': { 'field_name': 'Key' }})
    value: str = dataclasses.field(metadata={'form': { 'field_name': 'Value' }})
    

@dataclasses.dataclass
class CreateVariableSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateVariableRequest:
    path_params: CreateVariablePathParams = dataclasses.field()
    security: CreateVariableSecurity = dataclasses.field()
    request: Optional[CreateVariableCreateVariableRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVariableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_environment_variable: Optional[shared_serverless_v1_service_environment_variable.ServerlessV1ServiceEnvironmentVariable] = dataclasses.field(default=None)
    
