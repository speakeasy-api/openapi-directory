import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class PersistentDiskScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_ZONAL = "SCOPE_ZONAL"
    SCOPE_REGIONAL = "SCOPE_REGIONAL"


@dataclass_json
@dataclasses.dataclass
class PersistentDisk:
    r"""PersistentDisk
    Specification of a persistent disk attached to a VM.
    """
    
    disk_size: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSize') }})
    disk_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    provisioned_iops: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedIops') }})
    scope: Optional[PersistentDiskScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
