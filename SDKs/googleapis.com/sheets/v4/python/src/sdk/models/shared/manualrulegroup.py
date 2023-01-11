import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedvalue as shared_extendedvalue


@dataclass_json
@dataclasses.dataclass
class ManualRuleGroup:
    r"""ManualRuleGroup
    A group name and a list of items from the source data that should be placed in the group with this name.
    """
    
    group_name: Optional[shared_extendedvalue.ExtendedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    items: Optional[list[shared_extendedvalue.ExtendedValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
