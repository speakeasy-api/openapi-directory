import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import column as shared_column


@dataclass_json
@dataclasses.dataclass
class ColumnLayout:
    r"""ColumnLayout
    A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
    """
    
    columns: Optional[list[shared_column.Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
