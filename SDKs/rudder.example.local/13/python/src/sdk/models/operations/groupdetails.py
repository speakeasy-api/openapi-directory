import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group


@dataclasses.dataclass
class GroupDetailsPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class GroupDetails200ApplicationJSONActionEnum(str, Enum):
    GROUP_DETAILS = "groupDetails"


@dataclass_json
@dataclasses.dataclass
class GroupDetails200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class GroupDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GroupDetails200ApplicationJSON:
    action: GroupDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GroupDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GroupDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GroupDetailsRequest:
    path_params: GroupDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GroupDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_details_200_application_json_object: Optional[GroupDetails200ApplicationJSON] = dataclasses.field(default=None)
    
