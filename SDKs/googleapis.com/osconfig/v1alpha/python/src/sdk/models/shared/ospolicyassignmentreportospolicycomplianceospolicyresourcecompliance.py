import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep as shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep
from ..shared import ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput as shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput

class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance:
    r"""OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
    Compliance data for an OS policy resource.
    """
    
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    compliance_state_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStateReason') }})
    config_steps: Optional[list[shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSteps') }})
    exec_resource_output: Optional[shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execResourceOutput') }})
    os_policy_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceId') }})
    
