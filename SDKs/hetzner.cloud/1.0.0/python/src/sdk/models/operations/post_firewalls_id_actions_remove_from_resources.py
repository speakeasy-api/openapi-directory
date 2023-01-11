import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector:
    r"""PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
    Configuration for type label_selector, required if type is `label_selector`
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer:
    r"""PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
    Configuration for type server, required if type is `server`
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources:
    label_selector: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest:
    remove_from: list[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_from') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError:
    r"""PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesActionsResponse:
    actions: list[PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesRequest:
    path_params: PostFirewallsIDActionsRemoveFromResourcesPathParams = dataclasses.field()
    request: Optional[PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsRemoveFromResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_response: Optional[PostFirewallsIDActionsRemoveFromResourcesActionsResponse] = dataclasses.field(default=None)
    
