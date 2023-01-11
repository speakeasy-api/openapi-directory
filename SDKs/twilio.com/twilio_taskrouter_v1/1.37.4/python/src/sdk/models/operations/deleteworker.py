import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class DeleteWorkerPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkerHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteWorkerRequest:
    headers: DeleteWorkerHeaders = dataclasses.field()
    path_params: DeleteWorkerPathParams = dataclasses.field()
    security: DeleteWorkerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteWorkerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
