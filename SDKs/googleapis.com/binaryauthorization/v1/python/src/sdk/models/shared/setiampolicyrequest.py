import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicy as shared_iampolicy


@dataclass_json
@dataclasses.dataclass
class SetIamPolicyRequest:
    r"""SetIamPolicyRequest
    Request message for `SetIamPolicy` method.
    """
    
    policy: Optional[shared_iampolicy.IamPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
