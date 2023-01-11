import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetRuleTree200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_TREE = "GetRuleTree"


@dataclass_json
@dataclasses.dataclass
class GetRuleTree200ApplicationJSONData:
    rule_categories: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class GetRuleTree200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetRuleTree200ApplicationJSON:
    action: GetRuleTree200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRuleTree200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRuleTree200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetRuleTreeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rule_tree_200_application_json_object: Optional[GetRuleTree200ApplicationJSON] = dataclasses.field(default=None)
    
