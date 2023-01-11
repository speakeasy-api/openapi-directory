import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group


@dataclasses.dataclass
class ReloadGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class ReloadGroup200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUP = "reloadGroup"


@dataclass_json
@dataclasses.dataclass
class ReloadGroup200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ReloadGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadGroup200ApplicationJSON:
    action: ReloadGroup200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadGroup200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadGroup200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadGroupRequest:
    path_params: ReloadGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReloadGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_group_200_application_json_object: Optional[ReloadGroup200ApplicationJSON] = dataclasses.field(default=None)
    
