import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment_deployment as shared_serverless_v1_service_environment_deployment


CREATE_DEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateDeploymentPathParams:
    environment_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeploymentCreateDeploymentRequest:
    build_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BuildSid' }})
    

@dataclasses.dataclass
class CreateDeploymentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = dataclasses.field()
    security: CreateDeploymentSecurity = dataclasses.field()
    request: Optional[CreateDeploymentCreateDeploymentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_environment_deployment: Optional[shared_serverless_v1_service_environment_deployment.ServerlessV1ServiceEnvironmentDeployment] = dataclasses.field(default=None)
    
