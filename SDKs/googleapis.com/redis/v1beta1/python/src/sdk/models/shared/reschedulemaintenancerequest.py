import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RescheduleMaintenanceRequestRescheduleTypeEnum(str, Enum):
    RESCHEDULE_TYPE_UNSPECIFIED = "RESCHEDULE_TYPE_UNSPECIFIED"
    IMMEDIATE = "IMMEDIATE"
    NEXT_AVAILABLE_WINDOW = "NEXT_AVAILABLE_WINDOW"
    SPECIFIC_TIME = "SPECIFIC_TIME"


@dataclass_json
@dataclasses.dataclass
class RescheduleMaintenanceRequest:
    r"""RescheduleMaintenanceRequest
    Request for RescheduleMaintenance.
    """
    
    reschedule_type: Optional[RescheduleMaintenanceRequestRescheduleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescheduleType') }})
    schedule_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
