import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError:
    r"""PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrActionResponse:
    action: PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrRequest:
    path_params: PostFloatingIpsIDActionsChangeDNSPtrPathParams = dataclasses.field()
    request: Optional[PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFloatingIpsIDActionsChangeDNSPtrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostFloatingIpsIDActionsChangeDNSPtrActionResponse] = dataclasses.field(default=None)
    
