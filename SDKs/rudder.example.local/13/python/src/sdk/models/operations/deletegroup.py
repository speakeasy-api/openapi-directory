import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group


@dataclasses.dataclass
class DeleteGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class DeleteGroup200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP = "deleteGroup"


@dataclass_json
@dataclasses.dataclass
class DeleteGroup200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class DeleteGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteGroup200ApplicationJSON:
    action: DeleteGroup200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteGroup200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteGroup200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_group_200_application_json_object: Optional[DeleteGroup200ApplicationJSON] = dataclasses.field(default=None)
    
