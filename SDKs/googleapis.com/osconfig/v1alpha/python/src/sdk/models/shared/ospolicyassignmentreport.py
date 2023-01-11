import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentreportospolicycompliance as shared_ospolicyassignmentreportospolicycompliance


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentReport:
    r"""OsPolicyAssignmentReport
    A report of the OS policy assignment status for a given instance.
    """
    
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    last_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policy_assignment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignment') }})
    os_policy_compliances: Optional[list[shared_ospolicyassignmentreportospolicycompliance.OsPolicyAssignmentReportOsPolicyCompliance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyCompliances') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
