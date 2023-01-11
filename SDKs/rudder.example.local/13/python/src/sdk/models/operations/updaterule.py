import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_with_category as shared_rule_with_category


@dataclasses.dataclass
class UpdateRulePathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class UpdateRule200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE = "updateRule"


@dataclass_json
@dataclasses.dataclass
class UpdateRule200ApplicationJSONData:
    rules: list[shared_rule_with_category.RuleWithCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class UpdateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateRule200ApplicationJSON:
    action: UpdateRule200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateRule200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateRule200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateRuleRequest:
    path_params: UpdateRulePathParams = dataclasses.field()
    request: shared_rule_with_category.RuleWithCategory = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_rule_200_application_json_object: Optional[UpdateRule200ApplicationJSON] = dataclasses.field(default=None)
    
