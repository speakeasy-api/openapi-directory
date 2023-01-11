import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class Resources:
    r"""Resources
    Machine resources for a version.
    """
    
    cpu: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    disk_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskGb') }})
    kms_key_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyReference') }})
    memory_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryGb') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
