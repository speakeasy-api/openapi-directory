import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import task_enum_status_enum as shared_task_enum_status_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task as shared_taskrouter_v1_workspace_task


UPDATE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateTaskPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskUpdateTaskRequest:
    assignment_status: Optional[shared_task_enum_status_enum.TaskEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AssignmentStatus' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Reason' }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskChannel' }})
    

@dataclasses.dataclass
class UpdateTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTaskRequest:
    headers: UpdateTaskHeaders = dataclasses.field()
    path_params: UpdateTaskPathParams = dataclasses.field()
    security: UpdateTaskSecurity = dataclasses.field()
    request: Optional[UpdateTaskUpdateTaskRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task: Optional[shared_taskrouter_v1_workspace_task.TaskrouterV1WorkspaceTask] = dataclasses.field(default=None)
    
