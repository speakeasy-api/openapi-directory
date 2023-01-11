import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleiamv1_policy as shared_googleiamv1_policy


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1SetIamPolicyRequest:
    r"""GoogleIamV1SetIamPolicyRequest
    Request message for `SetIamPolicy` method.
    """
    
    policy: Optional[shared_googleiamv1_policy.GoogleIamV1Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
