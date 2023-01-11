import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parent as shared_parent


@dataclass_json
@dataclasses.dataclass
class Move:
    r"""Move
    Contains information about changes in an object's parents as a result of a move type event.
    """
    
    added_parents: Optional[list[shared_parent.Parent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedParents') }})
    removed_parents: Optional[list[shared_parent.Parent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedParents') }})
    
