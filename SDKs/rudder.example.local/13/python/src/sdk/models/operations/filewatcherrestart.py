import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileWatcherRestart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_RESTART = "fileWatcherRestart"

class FileWatcherRestart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class FileWatcherRestart200ApplicationJSON:
    action: FileWatcherRestart200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: FileWatcherRestart200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class FileWatcherRestartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_watcher_restart_200_application_json_object: Optional[FileWatcherRestart200ApplicationJSON] = dataclasses.field(default=None)
    
