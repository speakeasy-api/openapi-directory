import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetreference as shared_targetreference


@dataclass_json
@dataclasses.dataclass
class Move:
    r"""Move
    An object was moved.
    """
    
    added_parents: Optional[list[shared_targetreference.TargetReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedParents') }})
    removed_parents: Optional[list[shared_targetreference.TargetReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedParents') }})
    
