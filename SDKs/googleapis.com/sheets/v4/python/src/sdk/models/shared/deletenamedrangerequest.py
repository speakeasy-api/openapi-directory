import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteNamedRangeRequest:
    r"""DeleteNamedRangeRequest
    Removes the named range with the given ID from the spreadsheet.
    """
    
    named_range_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    
