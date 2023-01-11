import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RollbackInstanceRequest:
    r"""RollbackInstanceRequest
    Request for rollbacking a notebook instance
    """
    
    target_snapshot: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSnapshot') }})
    
