import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchClearValuesRequest:
    r"""BatchClearValuesRequest
    The request for clearing more than one range of values in a spreadsheet.
    """
    
    ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    
