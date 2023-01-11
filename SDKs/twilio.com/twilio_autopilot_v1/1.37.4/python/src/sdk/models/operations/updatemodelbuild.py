import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_model_build as shared_autopilot_v1_assistant_model_build


UPDATE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateModelBuildPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateModelBuildUpdateModelBuildRequest:
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateModelBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateModelBuildRequest:
    path_params: UpdateModelBuildPathParams = dataclasses.field()
    security: UpdateModelBuildSecurity = dataclasses.field()
    request: Optional[UpdateModelBuildUpdateModelBuildRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateModelBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_model_build: Optional[shared_autopilot_v1_assistant_model_build.AutopilotV1AssistantModelBuild] = dataclasses.field(default=None)
    
