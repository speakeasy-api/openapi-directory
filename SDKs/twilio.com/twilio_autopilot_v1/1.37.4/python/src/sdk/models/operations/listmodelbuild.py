import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_model_build as shared_autopilot_v1_assistant_model_build


LIST_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class ListModelBuildPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListModelBuildQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListModelBuildSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListModelBuildListModelBuildResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListModelBuildListModelBuildResponse:
    meta: Optional[ListModelBuildListModelBuildResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    model_builds: Optional[list[shared_autopilot_v1_assistant_model_build.AutopilotV1AssistantModelBuild]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_builds') }})
    

@dataclasses.dataclass
class ListModelBuildRequest:
    path_params: ListModelBuildPathParams = dataclasses.field()
    query_params: ListModelBuildQueryParams = dataclasses.field()
    security: ListModelBuildSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListModelBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_model_build_response: Optional[ListModelBuildListModelBuildResponse] = dataclasses.field(default=None)
    
