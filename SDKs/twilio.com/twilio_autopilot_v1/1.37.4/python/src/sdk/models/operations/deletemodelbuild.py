import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class DeleteModelBuildPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteModelBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteModelBuildRequest:
    path_params: DeleteModelBuildPathParams = dataclasses.field()
    security: DeleteModelBuildSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteModelBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
