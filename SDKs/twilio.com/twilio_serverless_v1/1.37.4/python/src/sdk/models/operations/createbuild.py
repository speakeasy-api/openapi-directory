import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_build as shared_serverless_v1_service_build


CREATE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateBuildPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBuildCreateBuildRequest:
    asset_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AssetVersions' }})
    dependencies: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Dependencies' }})
    function_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FunctionVersions' }})
    runtime: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Runtime' }})
    

@dataclasses.dataclass
class CreateBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBuildRequest:
    path_params: CreateBuildPathParams = dataclasses.field()
    security: CreateBuildSecurity = dataclasses.field()
    request: Optional[CreateBuildCreateBuildRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_build: Optional[shared_serverless_v1_service_build.ServerlessV1ServiceBuild] = dataclasses.field(default=None)
    
