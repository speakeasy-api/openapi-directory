import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_category as shared_rule_category


@dataclasses.dataclass
class GetRuleCategoryDetailsPathParams:
    rule_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class GetRuleCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_CATEGORY_DETAILS = "GetRuleCategoryDetails"


@dataclass_json
@dataclasses.dataclass
class GetRuleCategoryDetails200ApplicationJSONData:
    rules_categories: list[shared_rule_category.RuleCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesCategories') }})
    
class GetRuleCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetRuleCategoryDetails200ApplicationJSON:
    action: GetRuleCategoryDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRuleCategoryDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRuleCategoryDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetRuleCategoryDetailsRequest:
    path_params: GetRuleCategoryDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRuleCategoryDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rule_category_details_200_application_json_object: Optional[GetRuleCategoryDetails200ApplicationJSON] = dataclasses.field(default=None)
    
