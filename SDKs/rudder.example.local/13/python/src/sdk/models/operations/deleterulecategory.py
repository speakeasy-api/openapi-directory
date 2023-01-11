import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_category as shared_rule_category


@dataclasses.dataclass
class DeleteRuleCategoryPathParams:
    rule_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class DeleteRuleCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE_CATEGORY = "DeleteRuleCategory"


@dataclass_json
@dataclasses.dataclass
class DeleteRuleCategory200ApplicationJSONData:
    group_categories: list[shared_rule_category.RuleCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class DeleteRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteRuleCategory200ApplicationJSON:
    action: DeleteRuleCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteRuleCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteRuleCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteRuleCategoryRequest:
    path_params: DeleteRuleCategoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRuleCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_rule_category_200_application_json_object: Optional[DeleteRuleCategory200ApplicationJSON] = dataclasses.field(default=None)
    
