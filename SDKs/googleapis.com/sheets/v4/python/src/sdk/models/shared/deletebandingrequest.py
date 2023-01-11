import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteBandingRequest:
    r"""DeleteBandingRequest
    Removes the banded range with the given ID from the spreadsheet.
    """
    
    banded_range_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRangeId') }})
    
