import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleiamv1policy as shared_googleiamv1policy


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1SetIamPolicyRequest:
    r"""GoogleIamV1SetIamPolicyRequest
    Request message for `SetIamPolicy` method.
    """
    
    policy: Optional[shared_googleiamv1policy.GoogleIamV1Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
