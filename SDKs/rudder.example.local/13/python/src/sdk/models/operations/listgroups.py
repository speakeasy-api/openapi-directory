import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group

class ListGroups200ApplicationJSONActionEnum(str, Enum):
    LIST_GROUPS = "listGroups"


@dataclass_json
@dataclasses.dataclass
class ListGroups200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ListGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListGroups200ApplicationJSON:
    action: ListGroups200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListGroups200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListGroups200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_groups_200_application_json_object: Optional[ListGroups200ApplicationJSON] = dataclasses.field(default=None)
    
