import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workflow as shared_taskrouter_v1_workspace_workflow


LIST_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListWorkflowPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkflowQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWorkflowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkflowListWorkflowResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkflowListWorkflowResponse:
    meta: Optional[ListWorkflowListWorkflowResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    workflows: Optional[list[shared_taskrouter_v1_workspace_workflow.TaskrouterV1WorkspaceWorkflow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    

@dataclasses.dataclass
class ListWorkflowRequest:
    path_params: ListWorkflowPathParams = dataclasses.field()
    query_params: ListWorkflowQueryParams = dataclasses.field()
    security: ListWorkflowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_workflow_response: Optional[ListWorkflowListWorkflowResponse] = dataclasses.field(default=None)
    
