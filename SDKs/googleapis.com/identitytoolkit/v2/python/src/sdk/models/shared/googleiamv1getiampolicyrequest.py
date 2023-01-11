import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleiamv1getpolicyoptions as shared_googleiamv1getpolicyoptions


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1GetIamPolicyRequest:
    r"""GoogleIamV1GetIamPolicyRequest
    Request message for `GetIamPolicy` method.
    """
    
    options: Optional[shared_googleiamv1getpolicyoptions.GoogleIamV1GetPolicyOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
