import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_channel as shared_taskrouter_v1_workspace_worker_worker_channel


LIST_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListWorkerChannelPathParams:
    worker_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkerChannelQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWorkerChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerChannelListWorkerChannelResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerChannelListWorkerChannelResponse:
    channels: Optional[list[shared_taskrouter_v1_workspace_worker_worker_channel.TaskrouterV1WorkspaceWorkerWorkerChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    meta: Optional[ListWorkerChannelListWorkerChannelResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListWorkerChannelRequest:
    path_params: ListWorkerChannelPathParams = dataclasses.field()
    query_params: ListWorkerChannelQueryParams = dataclasses.field()
    security: ListWorkerChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListWorkerChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_worker_channel_response: Optional[ListWorkerChannelListWorkerChannelResponse] = dataclasses.field(default=None)
    
