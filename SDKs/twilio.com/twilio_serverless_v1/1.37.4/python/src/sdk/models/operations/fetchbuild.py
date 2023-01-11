import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_build as shared_serverless_v1_service_build


FETCH_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchBuildPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBuildRequest:
    path_params: FetchBuildPathParams = dataclasses.field()
    security: FetchBuildSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_build: Optional[shared_serverless_v1_service_build.ServerlessV1ServiceBuild] = dataclasses.field(default=None)
    
