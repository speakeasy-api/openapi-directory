import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selection as shared_selection


@dataclass_json
@dataclasses.dataclass
class SelectionList:
    r"""SelectionList
    Wrapper for SelectionList Field value.
    """
    
    values: Optional[list[shared_selection.Selection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
