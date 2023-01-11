import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_activity as shared_taskrouter_v1_workspace_activity


UPDATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateActivityPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateActivityUpdateActivityRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateActivitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateActivityRequest:
    path_params: UpdateActivityPathParams = dataclasses.field()
    security: UpdateActivitySecurity = dataclasses.field()
    request: Optional[UpdateActivityUpdateActivityRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_activity: Optional[shared_taskrouter_v1_workspace_activity.TaskrouterV1WorkspaceActivity] = dataclasses.field(default=None)
    
