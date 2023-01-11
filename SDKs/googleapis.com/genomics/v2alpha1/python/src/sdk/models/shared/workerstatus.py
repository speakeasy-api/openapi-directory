import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskstatus as shared_diskstatus


@dataclass_json
@dataclasses.dataclass
class WorkerStatus:
    r"""WorkerStatus
    The status of the worker VM.
    """
    
    attached_disks: Optional[dict[str, shared_diskstatus.DiskStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedDisks') }})
    boot_disk: Optional[shared_diskstatus.DiskStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDisk') }})
    free_ram_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeRamBytes') }})
    total_ram_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRamBytes') }})
    uptime_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptimeSeconds') }})
    
