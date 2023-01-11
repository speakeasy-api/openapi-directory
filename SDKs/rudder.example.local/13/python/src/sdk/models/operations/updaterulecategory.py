import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_category as shared_rule_category
from ..shared import rule_category_update as shared_rule_category_update


@dataclasses.dataclass
class UpdateRuleCategoryPathParams:
    rule_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class UpdateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE_CATEGORY = "UpdateRuleCategory"


@dataclass_json
@dataclasses.dataclass
class UpdateRuleCategory200ApplicationJSONData:
    rule_categories: list[shared_rule_category.RuleCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class UpdateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateRuleCategory200ApplicationJSON:
    action: UpdateRuleCategory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateRuleCategory200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateRuleCategory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateRuleCategoryRequest:
    path_params: UpdateRuleCategoryPathParams = dataclasses.field()
    request: shared_rule_category_update.RuleCategoryUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRuleCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_rule_category_200_application_json_object: Optional[UpdateRuleCategory200ApplicationJSON] = dataclasses.field(default=None)
    
