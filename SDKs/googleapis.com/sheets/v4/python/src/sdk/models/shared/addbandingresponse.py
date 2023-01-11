import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bandedrange as shared_bandedrange


@dataclass_json
@dataclasses.dataclass
class AddBandingResponse:
    r"""AddBandingResponse
    The result of adding a banded range.
    """
    
    banded_range: Optional[shared_bandedrange.BandedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRange') }})
    
