import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule


@dataclasses.dataclass
class RuleDetailsPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class RuleDetails200ApplicationJSONActionEnum(str, Enum):
    RULE_DETAILS = "ruleDetails"


@dataclass_json
@dataclasses.dataclass
class RuleDetails200ApplicationJSONData:
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class RuleDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class RuleDetails200ApplicationJSON:
    action: RuleDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: RuleDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RuleDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class RuleDetailsRequest:
    path_params: RuleDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RuleDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rule_details_200_application_json_object: Optional[RuleDetails200ApplicationJSON] = dataclasses.field(default=None)
    
