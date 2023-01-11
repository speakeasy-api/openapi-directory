import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DebugInstanceRequest:
    r"""DebugInstanceRequest
    Request message for Instances.DebugInstance.
    """
    
    ssh_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshKey') }})
    
