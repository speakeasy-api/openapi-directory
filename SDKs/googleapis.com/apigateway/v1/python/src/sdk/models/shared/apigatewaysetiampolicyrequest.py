import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewaypolicy as shared_apigatewaypolicy


@dataclass_json
@dataclasses.dataclass
class ApigatewaySetIamPolicyRequest:
    r"""ApigatewaySetIamPolicyRequest
    Request message for `SetIamPolicy` method.
    """
    
    policy: Optional[shared_apigatewaypolicy.ApigatewayPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
