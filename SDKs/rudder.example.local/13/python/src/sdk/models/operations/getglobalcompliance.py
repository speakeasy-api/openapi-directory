import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetGlobalCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_GLOBAL_COMPLIANCE = "getGlobalCompliance"


@dataclass_json
@dataclasses.dataclass
class GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails:
    error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGlobalCompliance200ApplicationJSONDataGlobalCompliance:
    compliance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: Optional[GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGlobalCompliance200ApplicationJSONData:
    global_compliance: GetGlobalCompliance200ApplicationJSONDataGlobalCompliance = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalCompliance') }})
    
class GetGlobalCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetGlobalCompliance200ApplicationJSON:
    action: GetGlobalCompliance200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetGlobalCompliance200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetGlobalCompliance200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetGlobalComplianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_global_compliance_200_application_json_object: Optional[GetGlobalCompliance200ApplicationJSON] = dataclasses.field(default=None)
    
