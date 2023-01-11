import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workflow as shared_taskrouter_v1_workspace_workflow


CREATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateWorkflowPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWorkflowCreateWorkflowRequest:
    configuration: str = dataclasses.field(metadata={'form': { 'field_name': 'Configuration' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    assignment_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AssignmentCallbackUrl' }})
    fallback_assignment_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackAssignmentCallbackUrl' }})
    task_reservation_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskReservationTimeout' }})
    

@dataclasses.dataclass
class CreateWorkflowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWorkflowRequest:
    path_params: CreateWorkflowPathParams = dataclasses.field()
    security: CreateWorkflowSecurity = dataclasses.field()
    request: Optional[CreateWorkflowCreateWorkflowRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_workflow: Optional[shared_taskrouter_v1_workspace_workflow.TaskrouterV1WorkspaceWorkflow] = dataclasses.field(default=None)
    
