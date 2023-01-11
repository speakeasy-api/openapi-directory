import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reschedule as shared_reschedule


@dataclass_json
@dataclasses.dataclass
class SQLInstancesRescheduleMaintenanceRequestBody:
    r"""SQLInstancesRescheduleMaintenanceRequestBody
    Reschedule options for maintenance windows.
    """
    
    reschedule: Optional[shared_reschedule.Reschedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reschedule') }})
    
