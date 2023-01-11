import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class CreateTimeSeriesSummary:
    r"""CreateTimeSeriesSummary
    Summary of the result of a failed request to write data to a time series.
    """
    
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    success_point_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successPointCount') }})
    total_point_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPointCount') }})
    
