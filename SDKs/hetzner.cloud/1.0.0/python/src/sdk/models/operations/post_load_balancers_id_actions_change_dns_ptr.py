import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError:
    r"""PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrActionResponse:
    action: PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrRequest:
    path_params: PostLoadBalancersIDActionsChangeDNSPtrPathParams = dataclasses.field()
    request: Optional[PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLoadBalancersIDActionsChangeDNSPtrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostLoadBalancersIDActionsChangeDNSPtrActionResponse] = dataclasses.field(default=None)
    
