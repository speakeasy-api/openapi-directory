import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalpolicy as shared_sasportalpolicy


@dataclass_json
@dataclasses.dataclass
class SasPortalSetPolicyRequest:
    r"""SasPortalSetPolicyRequest
    Request message for `SetPolicy` method.
    """
    
    disable_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNotification') }})
    policy: Optional[shared_sasportalpolicy.SasPortalPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
