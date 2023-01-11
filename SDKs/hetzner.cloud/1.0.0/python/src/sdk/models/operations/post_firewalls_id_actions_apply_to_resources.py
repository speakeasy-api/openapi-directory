import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector:
    r"""PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
    Configuration for type label_selector, required if type is `label_selector`
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer:
    r"""PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
    Configuration for type server, required if type is `server`
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources:
    label_selector: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest:
    apply_to: list[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apply_to') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionError:
    r"""PostFirewallsIDActionsApplyToResourcesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsApplyToResourcesActionsResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponseMeta:
    pagination: PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesActionsResponse:
    actions: list[PostFirewallsIDActionsApplyToResourcesActionsResponseAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesRequest:
    path_params: PostFirewallsIDActionsApplyToResourcesPathParams = dataclasses.field()
    request: Optional[PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsApplyToResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_response: Optional[PostFirewallsIDActionsApplyToResourcesActionsResponse] = dataclasses.field(default=None)
    
