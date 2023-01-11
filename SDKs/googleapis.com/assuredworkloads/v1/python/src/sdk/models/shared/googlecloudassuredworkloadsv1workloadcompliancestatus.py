import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus:
    r"""GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus
    Represents the Compliance Status of this workload
    """
    
    acknowledged_violation_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgedViolationCount') }})
    active_violation_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViolationCount') }})
    
