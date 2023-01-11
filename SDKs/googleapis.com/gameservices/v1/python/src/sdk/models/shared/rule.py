import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import condition as shared_condition
from ..shared import logconfig as shared_logconfig

class RuleActionEnum(str, Enum):
    NO_ACTION = "NO_ACTION"
    ALLOW = "ALLOW"
    ALLOW_WITH_LOG = "ALLOW_WITH_LOG"
    DENY = "DENY"
    DENY_WITH_LOG = "DENY_WITH_LOG"
    LOG = "LOG"


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    A rule to be applied in a Policy.
    """
    
    action: Optional[RuleActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    conditions: Optional[list[shared_condition.Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    log_config: Optional[list[shared_logconfig.LogConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    not_in: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notIn') }})
    permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
