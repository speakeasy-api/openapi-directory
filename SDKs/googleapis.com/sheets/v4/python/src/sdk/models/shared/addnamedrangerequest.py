import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namedrange as shared_namedrange


@dataclass_json
@dataclasses.dataclass
class AddNamedRangeRequest:
    r"""AddNamedRangeRequest
    Adds a named range to the spreadsheet.
    """
    
    named_range: Optional[shared_namedrange.NamedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRange') }})
    
