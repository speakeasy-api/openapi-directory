import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpolicyoptions as shared_getpolicyoptions


@dataclass_json
@dataclasses.dataclass
class GetIamPolicyRequest:
    r"""GetIamPolicyRequest
    Request message for GetIamPolicy method.
    """
    
    options: Optional[shared_getpolicyoptions.GetPolicyOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
