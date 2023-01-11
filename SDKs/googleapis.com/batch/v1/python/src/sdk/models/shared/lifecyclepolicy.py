import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncondition as shared_actioncondition

class LifecyclePolicyActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    RETRY_TASK = "RETRY_TASK"
    FAIL_TASK = "FAIL_TASK"


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicy:
    r"""LifecyclePolicy
    LifecyclePolicy describes how to deal with task failures based on different conditions.
    """
    
    action: Optional[LifecyclePolicyActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    action_condition: Optional[shared_actioncondition.ActionCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionCondition') }})
    
