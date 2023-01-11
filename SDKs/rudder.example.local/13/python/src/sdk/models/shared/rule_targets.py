import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_target_enum as shared_rule_target_enum


@dataclass_json
@dataclasses.dataclass
class RuleTargetsExclude:
    r"""RuleTargetsExclude
    list of groups to exclude from rule application
    """
    
    or_: Optional[list[shared_rule_target_enum.RuleTargetEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclasses.dataclass
class RuleTargetsInclude:
    r"""RuleTargetsInclude
    list of groups to include in rule application
    """
    
    or_: Optional[list[shared_rule_target_enum.RuleTargetEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclasses.dataclass
class RuleTargets:
    exclude: RuleTargetsExclude = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    include: RuleTargetsInclude = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
