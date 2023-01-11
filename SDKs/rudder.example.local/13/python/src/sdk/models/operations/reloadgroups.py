import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadGroups200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUPS = "reloadGroups"

class ReloadGroups200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclasses.dataclass
class ReloadGroups200ApplicationJSONData:
    groups: ReloadGroups200ApplicationJSONDataGroupsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ReloadGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadGroups200ApplicationJSON:
    action: ReloadGroups200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadGroups200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadGroups200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_groups_200_application_json_object: Optional[ReloadGroups200ApplicationJSON] = dataclasses.field(default=None)
    
