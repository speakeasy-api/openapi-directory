import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker as shared_taskrouter_v1_workspace_worker


UPDATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateWorkerPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkerHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkerUpdateWorkerRequest:
    activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ActivitySid' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reject_pending_reservations: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RejectPendingReservations' }})
    

@dataclasses.dataclass
class UpdateWorkerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWorkerRequest:
    headers: UpdateWorkerHeaders = dataclasses.field()
    path_params: UpdateWorkerPathParams = dataclasses.field()
    security: UpdateWorkerSecurity = dataclasses.field()
    request: Optional[UpdateWorkerUpdateWorkerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWorkerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker: Optional[shared_taskrouter_v1_workspace_worker.TaskrouterV1WorkspaceWorker] = dataclasses.field(default=None)
    
