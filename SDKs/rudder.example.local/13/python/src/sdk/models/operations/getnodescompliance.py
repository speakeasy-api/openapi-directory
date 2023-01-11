import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetNodesComplianceQueryParams:
    level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetNodesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_NODES_COMPLIANCE = "getNodesCompliance"


@dataclass_json
@dataclasses.dataclass
class GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails:
    error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetNodesCompliance200ApplicationJSONDataNodesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclasses.dataclass
class GetNodesCompliance200ApplicationJSONDataNodes:
    compliance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetNodesCompliance200ApplicationJSONDataNodesModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNodesCompliance200ApplicationJSONData:
    nodes: list[GetNodesCompliance200ApplicationJSONDataNodes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetNodesCompliance200ApplicationJSON:
    action: GetNodesCompliance200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodesCompliance200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodesCompliance200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetNodesComplianceRequest:
    query_params: GetNodesComplianceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNodesComplianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_nodes_compliance_200_application_json_object: Optional[GetNodesCompliance200ApplicationJSON] = dataclasses.field(default=None)
    
