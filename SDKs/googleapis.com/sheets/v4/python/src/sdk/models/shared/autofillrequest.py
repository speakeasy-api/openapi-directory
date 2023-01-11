import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange
from ..shared import sourceanddestination as shared_sourceanddestination


@dataclass_json
@dataclasses.dataclass
class AutoFillRequest:
    r"""AutoFillRequest
    Fills in more data based on existing data.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    source_and_destination: Optional[shared_sourceanddestination.SourceAndDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAndDestination') }})
    use_alternate_series: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAlternateSeries') }})
    
