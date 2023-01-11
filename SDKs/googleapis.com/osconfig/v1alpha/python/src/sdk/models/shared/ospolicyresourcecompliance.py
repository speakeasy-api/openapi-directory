import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourceconfigstep as shared_ospolicyresourceconfigstep
from ..shared import ospolicyresourcecomplianceexecresourceoutput as shared_ospolicyresourcecomplianceexecresourceoutput

class OsPolicyResourceComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceCompliance:
    r"""OsPolicyResourceCompliance
    Compliance data for an OS policy resource.
    """
    
    config_steps: Optional[list[shared_ospolicyresourceconfigstep.OsPolicyResourceConfigStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSteps') }})
    exec_resource_output: Optional[shared_ospolicyresourcecomplianceexecresourceoutput.OsPolicyResourceComplianceExecResourceOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execResourceOutput') }})
    os_policy_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceId') }})
    state: Optional[OsPolicyResourceComplianceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
