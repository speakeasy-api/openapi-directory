import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrimWhitespaceResponse:
    r"""TrimWhitespaceResponse
    The result of trimming whitespace in cells.
    """
    
    cells_changed_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsChangedCount') }})
    
