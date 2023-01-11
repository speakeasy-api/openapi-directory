import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetNodeCompliancePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNodeComplianceQueryParams:
    level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetNodeCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_NODE_COMPLIANCE = "getNodeCompliance"


@dataclass_json
@dataclasses.dataclass
class GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails:
    error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetNodeCompliance200ApplicationJSONDataNodesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclasses.dataclass
class GetNodeCompliance200ApplicationJSONDataNodes:
    compliance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetNodeCompliance200ApplicationJSONDataNodesModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNodeCompliance200ApplicationJSONData:
    nodes: list[GetNodeCompliance200ApplicationJSONDataNodes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodeCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetNodeCompliance200ApplicationJSON:
    action: GetNodeCompliance200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodeCompliance200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodeCompliance200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetNodeComplianceRequest:
    path_params: GetNodeCompliancePathParams = dataclasses.field()
    query_params: GetNodeComplianceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNodeComplianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_node_compliance_200_application_json_object: Optional[GetNodeCompliance200ApplicationJSON] = dataclasses.field(default=None)
    
