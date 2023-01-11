import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group
from ..shared import group_update as shared_group_update


@dataclasses.dataclass
class UpdateGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class UpdateGroup200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP = "updateGroup"


@dataclass_json
@dataclasses.dataclass
class UpdateGroup200ApplicationJSONData:
    groups: list[shared_group.Group] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class UpdateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateGroup200ApplicationJSON:
    action: UpdateGroup200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateGroup200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateGroup200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateGroupRequest:
    path_params: UpdateGroupPathParams = dataclasses.field()
    request: shared_group_update.GroupUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_group_200_application_json_object: Optional[UpdateGroup200ApplicationJSON] = dataclasses.field(default=None)
    
