import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetRuleCompliancePathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRuleComplianceQueryParams:
    level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetRuleCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_COMPLIANCE = "getRuleCompliance"


@dataclass_json
@dataclasses.dataclass
class GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails:
    error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetRuleCompliance200ApplicationJSONDataRulesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclasses.dataclass
class GetRuleCompliance200ApplicationJSONDataRules:
    compliance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetRuleCompliance200ApplicationJSONDataRulesModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRuleCompliance200ApplicationJSONData:
    rules: list[GetRuleCompliance200ApplicationJSONDataRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class GetRuleCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetRuleCompliance200ApplicationJSON:
    action: GetRuleCompliance200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRuleCompliance200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRuleCompliance200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetRuleComplianceRequest:
    path_params: GetRuleCompliancePathParams = dataclasses.field()
    query_params: GetRuleComplianceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRuleComplianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rule_compliance_200_application_json_object: Optional[GetRuleCompliance200ApplicationJSON] = dataclasses.field(default=None)
    
