import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group_category as shared_group_category


@dataclasses.dataclass
class GetGroupCategoryDetailsPathParams:
    group_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class GetGroupCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_GROUP_CATEGORY_DETAILS = "GetGroupCategoryDetails"


@dataclass_json
@dataclasses.dataclass
class GetGroupCategoryDetails200ApplicationJSONData:
    group_categories: list[shared_group_category.GroupCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class GetGroupCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetGroupCategoryDetails200ApplicationJSON:
    action: GetGroupCategoryDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetGroupCategoryDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetGroupCategoryDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetGroupCategoryDetailsRequest:
    path_params: GetGroupCategoryDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupCategoryDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_group_category_details_200_application_json_object: Optional[GetGroupCategoryDetails200ApplicationJSON] = dataclasses.field(default=None)
    
