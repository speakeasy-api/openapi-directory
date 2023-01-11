import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policy as shared_policy
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class IamPolicy:
    r"""IamPolicy
    IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
    """
    
    policy: Optional[shared_policy.Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
