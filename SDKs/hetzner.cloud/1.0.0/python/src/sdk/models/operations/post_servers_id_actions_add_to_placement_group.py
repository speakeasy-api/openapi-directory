import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupAddToPlacementGroupRequest:
    placement_group: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupActionResponseActionError:
    r"""PostServersIDActionsAddToPlacementGroupActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsAddToPlacementGroupActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostServersIDActionsAddToPlacementGroupActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupActionResponse:
    action: PostServersIDActionsAddToPlacementGroupActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupRequest:
    path_params: PostServersIDActionsAddToPlacementGroupPathParams = dataclasses.field()
    request: Optional[PostServersIDActionsAddToPlacementGroupAddToPlacementGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostServersIDActionsAddToPlacementGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostServersIDActionsAddToPlacementGroupActionResponse] = dataclasses.field(default=None)
    
