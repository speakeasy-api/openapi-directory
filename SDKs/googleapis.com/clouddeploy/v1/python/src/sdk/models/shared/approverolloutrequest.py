import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApproveRolloutRequest:
    r"""ApproveRolloutRequest
    The request object used by `ApproveRollout`.
    """
    
    approved: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    
