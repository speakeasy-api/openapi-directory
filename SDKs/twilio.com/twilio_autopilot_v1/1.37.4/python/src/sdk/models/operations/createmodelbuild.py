import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_model_build as shared_autopilot_v1_assistant_model_build


CREATE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateModelBuildPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateModelBuildCreateModelBuildRequest:
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateModelBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateModelBuildRequest:
    path_params: CreateModelBuildPathParams = dataclasses.field()
    security: CreateModelBuildSecurity = dataclasses.field()
    request: Optional[CreateModelBuildCreateModelBuildRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateModelBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_model_build: Optional[shared_autopilot_v1_assistant_model_build.AutopilotV1AssistantModelBuild] = dataclasses.field(default=None)
    
