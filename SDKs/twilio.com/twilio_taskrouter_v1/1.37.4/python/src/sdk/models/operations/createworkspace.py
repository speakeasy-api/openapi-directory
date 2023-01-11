import dataclasses
from typing import Optional
from enum import Enum
from ..shared import workspace_enum_queue_order_enum as shared_workspace_enum_queue_order_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace as shared_taskrouter_v1_workspace


CREATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateWorkspaceCreateWorkspaceRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    event_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EventCallbackUrl' }})
    events_filter: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EventsFilter' }})
    multi_task_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MultiTaskEnabled' }})
    prioritize_queue_order: Optional[shared_workspace_enum_queue_order_enum.WorkspaceEnumQueueOrderEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PrioritizeQueueOrder' }})
    template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Template' }})
    

@dataclasses.dataclass
class CreateWorkspaceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWorkspaceRequest:
    security: CreateWorkspaceSecurity = dataclasses.field()
    request: Optional[CreateWorkspaceCreateWorkspaceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace: Optional[shared_taskrouter_v1_workspace.TaskrouterV1Workspace] = dataclasses.field(default=None)
    
