import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetRulesComplianceQueryParams:
    level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetRulesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_RULES_COMPLIANCE = "getRulesCompliance"


@dataclass_json
@dataclasses.dataclass
class GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails:
    error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetRulesCompliance200ApplicationJSONDataRulesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclasses.dataclass
class GetRulesCompliance200ApplicationJSONDataRules:
    compliance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetRulesCompliance200ApplicationJSONDataRulesModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRulesCompliance200ApplicationJSONData:
    rules: list[GetRulesCompliance200ApplicationJSONDataRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class GetRulesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetRulesCompliance200ApplicationJSON:
    action: GetRulesCompliance200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRulesCompliance200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRulesCompliance200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetRulesComplianceRequest:
    query_params: GetRulesComplianceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesComplianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rules_compliance_200_application_json_object: Optional[GetRulesCompliance200ApplicationJSON] = dataclasses.field(default=None)
    
