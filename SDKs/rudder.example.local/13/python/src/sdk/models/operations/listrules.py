import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule

class ListRules200ApplicationJSONActionEnum(str, Enum):
    LIST_RULES = "listRules"


@dataclass_json
@dataclasses.dataclass
class ListRules200ApplicationJSONData:
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ListRules200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListRules200ApplicationJSON:
    action: ListRules200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListRules200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListRules200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_rules_200_application_json_object: Optional[ListRules200ApplicationJSON] = dataclasses.field(default=None)
    
