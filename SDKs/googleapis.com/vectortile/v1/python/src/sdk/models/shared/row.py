import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Row:
    r"""Row
    A row of altitude points in the elevation grid, ordered from west to east.
    """
    
    altitude_diffs: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altitudeDiffs') }})
    
