import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_category as shared_rule_category

class CreateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE_CATEGORY = "CreateRuleCategory"


@dataclass_json
@dataclasses.dataclass
class CreateRuleCategory200ApplicationJSONData:
    rule_categories: list[shared_rule_category.RuleCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class CreateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateRuleCategory200ApplicationJSON:
    action: CreateRuleCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateRuleCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateRuleCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateRuleCategoryRequest:
    request: shared_rule_category.RuleCategory = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRuleCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_rule_category_200_application_json_object: Optional[CreateRuleCategory200ApplicationJSON] = dataclasses.field(default=None)
    
