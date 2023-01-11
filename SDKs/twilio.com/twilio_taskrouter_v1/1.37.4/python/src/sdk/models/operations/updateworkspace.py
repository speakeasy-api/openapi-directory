import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import workspace_enum_queue_order_enum as shared_workspace_enum_queue_order_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace as shared_taskrouter_v1_workspace


UPDATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateWorkspacePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkspaceUpdateWorkspaceRequest:
    default_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultActivitySid' }})
    event_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EventCallbackUrl' }})
    events_filter: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EventsFilter' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    multi_task_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MultiTaskEnabled' }})
    prioritize_queue_order: Optional[shared_workspace_enum_queue_order_enum.WorkspaceEnumQueueOrderEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PrioritizeQueueOrder' }})
    timeout_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TimeoutActivitySid' }})
    

@dataclasses.dataclass
class UpdateWorkspaceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = dataclasses.field()
    security: UpdateWorkspaceSecurity = dataclasses.field()
    request: Optional[UpdateWorkspaceUpdateWorkspaceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace: Optional[shared_taskrouter_v1_workspace.TaskrouterV1Workspace] = dataclasses.field(default=None)
    
