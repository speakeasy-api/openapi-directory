import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule


@dataclasses.dataclass
class DeleteRulePathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class DeleteRule200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE = "deleteRule"


@dataclass_json
@dataclasses.dataclass
class DeleteRule200ApplicationJSONData:
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class DeleteRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteRule200ApplicationJSON:
    action: DeleteRule200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteRule200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteRule200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteRuleRequest:
    path_params: DeleteRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_rule_200_application_json_object: Optional[DeleteRule200ApplicationJSON] = dataclasses.field(default=None)
    
