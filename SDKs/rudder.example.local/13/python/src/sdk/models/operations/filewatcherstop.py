import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileWatcherStop200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_STOP = "fileWatcherStop"

class FileWatcherStop200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class FileWatcherStop200ApplicationJSON:
    action: FileWatcherStop200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: FileWatcherStop200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class FileWatcherStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_watcher_stop_200_application_json_object: Optional[FileWatcherStop200ApplicationJSON] = dataclasses.field(default=None)
    
