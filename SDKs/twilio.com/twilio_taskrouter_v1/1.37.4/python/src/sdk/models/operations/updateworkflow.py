import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workflow as shared_taskrouter_v1_workspace_workflow


UPDATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateWorkflowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkflowUpdateWorkflowRequest:
    assignment_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AssignmentCallbackUrl' }})
    configuration: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    fallback_assignment_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackAssignmentCallbackUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    re_evaluate_tasks: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReEvaluateTasks' }})
    task_reservation_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskReservationTimeout' }})
    

@dataclasses.dataclass
class UpdateWorkflowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWorkflowRequest:
    path_params: UpdateWorkflowPathParams = dataclasses.field()
    security: UpdateWorkflowSecurity = dataclasses.field()
    request: Optional[UpdateWorkflowUpdateWorkflowRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_workflow: Optional[shared_taskrouter_v1_workspace_workflow.TaskrouterV1WorkspaceWorkflow] = dataclasses.field(default=None)
    
