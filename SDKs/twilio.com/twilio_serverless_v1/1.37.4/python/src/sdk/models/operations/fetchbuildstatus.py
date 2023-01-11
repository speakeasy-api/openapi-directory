import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_build_build_status as shared_serverless_v1_service_build_build_status


FETCH_BUILD_STATUS_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchBuildStatusPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBuildStatusSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBuildStatusRequest:
    path_params: FetchBuildStatusPathParams = dataclasses.field()
    security: FetchBuildStatusSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBuildStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_build_build_status: Optional[shared_serverless_v1_service_build_build_status.ServerlessV1ServiceBuildBuildStatus] = dataclasses.field(default=None)
    
