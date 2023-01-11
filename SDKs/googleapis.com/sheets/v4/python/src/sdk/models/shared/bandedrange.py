import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bandingproperties as shared_bandingproperties
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class BandedRange:
    r"""BandedRange
    A banded (alternating colors) range in a sheet.
    """
    
    banded_range_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRangeId') }})
    column_properties: Optional[shared_bandingproperties.BandingProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnProperties') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    row_properties: Optional[shared_bandingproperties.BandingProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowProperties') }})
    
