import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pushconfig as shared_pushconfig


@dataclass_json
@dataclasses.dataclass
class ModifyPushConfigRequest:
    r"""ModifyPushConfigRequest
    Request for the ModifyPushConfig method.
    """
    
    push_config: Optional[shared_pushconfig.PushConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushConfig') }})
    subscription: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
