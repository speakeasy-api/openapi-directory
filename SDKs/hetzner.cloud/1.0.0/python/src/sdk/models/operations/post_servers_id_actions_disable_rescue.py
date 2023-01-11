import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostServersIDActionsDisableRescuePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsDisableRescueActionResponseActionError:
    r"""PostServersIDActionsDisableRescueActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsDisableRescueActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsDisableRescueActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsDisableRescueActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsDisableRescueActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostServersIDActionsDisableRescueActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsDisableRescueActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsDisableRescueActionResponse:
    action: PostServersIDActionsDisableRescueActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostServersIDActionsDisableRescueRequest:
    path_params: PostServersIDActionsDisableRescuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostServersIDActionsDisableRescueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostServersIDActionsDisableRescueActionResponse] = dataclasses.field(default=None)
    
