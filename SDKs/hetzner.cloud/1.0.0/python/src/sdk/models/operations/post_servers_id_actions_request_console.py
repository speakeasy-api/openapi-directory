import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostServersIDActionsRequestConsolePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionError:
    r"""PostServersIDActionsRequestConsole201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsRequestConsole201ApplicationJSONAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsRequestConsole201ApplicationJSONActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostServersIDActionsRequestConsole201ApplicationJSONActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsRequestConsole201ApplicationJSON:
    action: PostServersIDActionsRequestConsole201ApplicationJSONAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    wss_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wss_url') }})
    

@dataclasses.dataclass
class PostServersIDActionsRequestConsoleRequest:
    path_params: PostServersIDActionsRequestConsolePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostServersIDActionsRequestConsoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_servers_id_actions_request_console_201_application_json_object: Optional[PostServersIDActionsRequestConsole201ApplicationJSON] = dataclasses.field(default=None)
    
