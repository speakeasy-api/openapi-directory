import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetGroupTree200ApplicationJSONActionEnum(str, Enum):
    GET_GROUP_TREE = "GetGroupTree"


@dataclass_json
@dataclasses.dataclass
class GetGroupTree200ApplicationJSONData:
    group_categories: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class GetGroupTree200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetGroupTree200ApplicationJSON:
    action: GetGroupTree200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetGroupTree200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetGroupTree200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetGroupTreeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_group_tree_200_application_json_object: Optional[GetGroupTree200ApplicationJSON] = dataclasses.field(default=None)
    
