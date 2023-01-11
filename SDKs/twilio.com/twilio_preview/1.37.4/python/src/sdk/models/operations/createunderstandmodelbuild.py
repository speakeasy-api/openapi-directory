import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_model_build as shared_preview_understand_assistant_model_build


CREATE_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandModelBuildPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest:
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateUnderstandModelBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandModelBuildRequest:
    path_params: CreateUnderstandModelBuildPathParams = dataclasses.field()
    security: CreateUnderstandModelBuildSecurity = dataclasses.field()
    request: Optional[CreateUnderstandModelBuildCreateUnderstandModelBuildRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandModelBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_model_build: Optional[shared_preview_understand_assistant_model_build.PreviewUnderstandAssistantModelBuild] = dataclasses.field(default=None)
    
