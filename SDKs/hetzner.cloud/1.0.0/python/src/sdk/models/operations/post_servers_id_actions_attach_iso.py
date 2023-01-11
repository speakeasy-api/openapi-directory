import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostServersIDActionsAttachIsoPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAttachIsoRequestBody:
    iso: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAttachIsoActionResponseActionError:
    r"""PostServersIDActionsAttachIsoActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAttachIsoActionResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsAttachIsoActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAttachIsoActionResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsAttachIsoActionResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostServersIDActionsAttachIsoActionResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsAttachIsoActionResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsAttachIsoActionResponse:
    action: PostServersIDActionsAttachIsoActionResponseAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class PostServersIDActionsAttachIsoRequest:
    path_params: PostServersIDActionsAttachIsoPathParams = dataclasses.field()
    request: Optional[PostServersIDActionsAttachIsoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostServersIDActionsAttachIsoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_response: Optional[PostServersIDActionsAttachIsoActionResponse] = dataclasses.field(default=None)
    
