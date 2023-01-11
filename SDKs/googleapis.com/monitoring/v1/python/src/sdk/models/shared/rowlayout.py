import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row


@dataclass_json
@dataclasses.dataclass
class RowLayout:
    r"""RowLayout
    A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
    """
    
    rows: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
