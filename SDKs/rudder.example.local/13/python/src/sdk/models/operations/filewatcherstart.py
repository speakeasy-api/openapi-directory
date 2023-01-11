import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileWatcherStart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_START = "fileWatcherStart"

class FileWatcherStart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class FileWatcherStart200ApplicationJSON:
    action: FileWatcherStart200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: FileWatcherStart200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class FileWatcherStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_watcher_start_200_application_json_object: Optional[FileWatcherStart200ApplicationJSON] = dataclasses.field(default=None)
    
