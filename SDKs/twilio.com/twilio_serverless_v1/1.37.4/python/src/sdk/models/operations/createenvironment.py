import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment as shared_serverless_v1_service_environment


CREATE_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateEnvironmentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEnvironmentCreateEnvironmentRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    domain_suffix: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DomainSuffix' }})
    

@dataclasses.dataclass
class CreateEnvironmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEnvironmentRequest:
    path_params: CreateEnvironmentPathParams = dataclasses.field()
    security: CreateEnvironmentSecurity = dataclasses.field()
    request: Optional[CreateEnvironmentCreateEnvironmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_environment: Optional[shared_serverless_v1_service_environment.ServerlessV1ServiceEnvironment] = dataclasses.field(default=None)
    
