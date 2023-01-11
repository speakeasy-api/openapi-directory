import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group_category as shared_group_category
from ..shared import group_category_update as shared_group_category_update


@dataclasses.dataclass
class UpdateGroupCategoryPathParams:
    group_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class UpdateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP_CATEGORY = "UpdateGroupCategory"


@dataclass_json
@dataclasses.dataclass
class UpdateGroupCategory200ApplicationJSONData:
    group_categories: list[shared_group_category.GroupCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class UpdateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateGroupCategory200ApplicationJSON:
    action: UpdateGroupCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateGroupCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateGroupCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateGroupCategoryRequest:
    path_params: UpdateGroupCategoryPathParams = dataclasses.field()
    request: shared_group_category_update.GroupCategoryUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGroupCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_group_category_200_application_json_object: Optional[UpdateGroupCategory200ApplicationJSON] = dataclasses.field(default=None)
    
