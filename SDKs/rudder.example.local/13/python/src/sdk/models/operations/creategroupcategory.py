import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group_category as shared_group_category

class CreateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP_CATEGORY = "CreateGroupCategory"


@dataclass_json
@dataclasses.dataclass
class CreateGroupCategory200ApplicationJSONData:
    group_categories: list[shared_group_category.GroupCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class CreateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateGroupCategory200ApplicationJSON:
    action: CreateGroupCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateGroupCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateGroupCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateGroupCategoryRequest:
    request: shared_group_category.GroupCategory = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_category_200_application_json_object: Optional[CreateGroupCategory200ApplicationJSON] = dataclasses.field(default=None)
    
