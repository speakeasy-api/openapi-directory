import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branchmodel as shared_branchmodel


@dataclass_json
@dataclasses.dataclass
class BranchModelResults:
    r"""BranchModelResults
    Holds results from a paged query returning BranchModel values
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    data: Optional[list[shared_branchmodel.BranchModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
