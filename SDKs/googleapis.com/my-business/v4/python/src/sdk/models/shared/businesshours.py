import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiod as shared_timeperiod


@dataclass_json
@dataclasses.dataclass
class BusinessHours:
    r"""BusinessHours
    Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
    """
    
    periods: Optional[list[shared_timeperiod.TimePeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    
