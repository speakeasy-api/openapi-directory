import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleancondition as shared_booleancondition
from ..shared import cellformat as shared_cellformat


@dataclass_json
@dataclasses.dataclass
class BooleanRule:
    r"""BooleanRule
    A rule that may or may not match, depending on the condition.
    """
    
    condition: Optional[shared_booleancondition.BooleanCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    format: Optional[shared_cellformat.CellFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    
