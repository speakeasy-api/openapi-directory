import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadAll200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL = "reloadAll"

class ReloadAll200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"

class ReloadAll200ApplicationJSONDataTechniquesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclasses.dataclass
class ReloadAll200ApplicationJSONData:
    groups: ReloadAll200ApplicationJSONDataGroupsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    techniques: ReloadAll200ApplicationJSONDataTechniquesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniques') }})
    
class ReloadAll200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadAll200ApplicationJSON:
    action: ReloadAll200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadAll200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAll200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_all_200_application_json_object: Optional[ReloadAll200ApplicationJSON] = dataclasses.field(default=None)
    
