import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApproveApprovalRequestMessage:
    r"""ApproveApprovalRequestMessage
    Request to approve an ApprovalRequest.
    """
    
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    
