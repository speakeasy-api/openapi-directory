import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment as shared_serverless_v1_service_environment


FETCH_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchEnvironmentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEnvironmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEnvironmentRequest:
    path_params: FetchEnvironmentPathParams = dataclasses.field()
    security: FetchEnvironmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_environment: Optional[shared_serverless_v1_service_environment.ServerlessV1ServiceEnvironment] = dataclasses.field(default=None)
    
