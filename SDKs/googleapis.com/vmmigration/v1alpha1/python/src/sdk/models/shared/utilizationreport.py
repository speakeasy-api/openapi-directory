import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import vmutilizationinfo as shared_vmutilizationinfo
from ..shared import vmutilizationinfo as shared_vmutilizationinfo

class UtilizationReportStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class UtilizationReportTimeFrameEnum(str, Enum):
    TIME_FRAME_UNSPECIFIED = "TIME_FRAME_UNSPECIFIED"
    WEEK = "WEEK"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclasses.dataclass
class UtilizationReport:
    r"""UtilizationReport
    Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    frame_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameEndTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[UtilizationReportStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    time_frame: Optional[UtilizationReportTimeFrameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFrame') }})
    vm_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmCount') }})
    vms: Optional[list[shared_vmutilizationinfo.VMUtilizationInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vms') }})
    vms_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmsCount') }})
    

@dataclass_json
@dataclasses.dataclass
class UtilizationReportInput:
    r"""UtilizationReportInput
    Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    time_frame: Optional[UtilizationReportTimeFrameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFrame') }})
    vms: Optional[list[shared_vmutilizationinfo.VMUtilizationInfoInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vms') }})
    
