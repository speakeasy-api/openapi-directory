import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group
from ..shared import group_new as shared_group_new

class CreateGroup200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP = "createGroup"


@dataclass_json
@dataclasses.dataclass
class CreateGroup200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class CreateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateGroup200ApplicationJSON:
    action: CreateGroup200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateGroup200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateGroup200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateGroupRequest:
    request: Optional[shared_group_new.GroupNew] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_200_application_json_object: Optional[CreateGroup200ApplicationJSON] = dataclasses.field(default=None)
    
