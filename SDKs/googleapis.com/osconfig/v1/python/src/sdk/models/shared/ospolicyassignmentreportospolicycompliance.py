import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance as shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance

class OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentReportOsPolicyCompliance:
    r"""OsPolicyAssignmentReportOsPolicyCompliance
    Compliance data for an OS policy
    """
    
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    compliance_state_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStateReason') }})
    os_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyId') }})
    os_policy_resource_compliances: Optional[list[shared_ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceCompliances') }})
    
