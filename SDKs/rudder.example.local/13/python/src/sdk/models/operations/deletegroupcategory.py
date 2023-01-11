import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group_category as shared_group_category


@dataclasses.dataclass
class DeleteGroupCategoryPathParams:
    group_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class DeleteGroupCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP_CATEGORY = "DeleteGroupCategory"


@dataclass_json
@dataclasses.dataclass
class DeleteGroupCategory200ApplicationJSONData:
    group_categories: list[shared_group_category.GroupCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class DeleteGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteGroupCategory200ApplicationJSON:
    action: DeleteGroupCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteGroupCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteGroupCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteGroupCategoryRequest:
    path_params: DeleteGroupCategoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGroupCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_group_category_200_application_json_object: Optional[DeleteGroupCategory200ApplicationJSON] = dataclasses.field(default=None)
    
