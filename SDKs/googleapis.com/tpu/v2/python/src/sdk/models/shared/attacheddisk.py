import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttachedDiskModeEnum(str, Enum):
    DISK_MODE_UNSPECIFIED = "DISK_MODE_UNSPECIFIED"
    READ_WRITE = "READ_WRITE"
    READ_ONLY = "READ_ONLY"


@dataclass_json
@dataclasses.dataclass
class AttachedDisk:
    r"""AttachedDisk
    A node-attached disk resource. Next ID: 8;
    """
    
    mode: Optional[AttachedDiskModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    source_disk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDisk') }})
    
