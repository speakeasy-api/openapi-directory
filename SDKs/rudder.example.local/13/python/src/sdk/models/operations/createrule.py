import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule
from ..shared import rule_new as shared_rule_new

class CreateRule200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE = "createRule"


@dataclass_json
@dataclasses.dataclass
class CreateRule200ApplicationJSONData:
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class CreateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateRule200ApplicationJSON:
    action: CreateRule200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateRule200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateRule200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateRuleRequest:
    request: Optional[shared_rule_new.RuleNew] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_rule_200_application_json_object: Optional[CreateRule200ApplicationJSON] = dataclasses.field(default=None)
    
