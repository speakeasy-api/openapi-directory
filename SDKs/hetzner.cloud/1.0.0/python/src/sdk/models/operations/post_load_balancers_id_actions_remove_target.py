import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector
    Configuration for label selector targets, required if type is `label_selector`
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer:
    r"""PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer
    Configuration for type Server, required if type is `server`
    """
    
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest:
    type: PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionError:
    r"""PostLoadBalancersIDActionsRemoveTargetActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsRemoveTargetActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetActionResponse:
    action: PostLoadBalancersIDActionsRemoveTargetActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetRequest:
    path_params: PostLoadBalancersIDActionsRemoveTargetPathParams = dataclasses.field()
    request: Optional[PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLoadBalancersIDActionsRemoveTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostLoadBalancersIDActionsRemoveTargetActionResponse] = dataclasses.field(default=None)
    
