import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExistingDisk:
    r"""ExistingDisk
    Configuration for an existing disk to be attached to the VM.
    """
    
    disk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    
