import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disk as shared_disk


@dataclass_json
@dataclasses.dataclass
class AttachedDisk:
    r"""AttachedDisk
    A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    existing_disk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingDisk') }})
    new_disk: Optional[shared_disk.Disk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDisk') }})
    
