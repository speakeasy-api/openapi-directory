import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiod as shared_timeperiod


@dataclass_json
@dataclasses.dataclass
class MoreHours:
    r"""MoreHours
    The time periods during which a location is open for certain types of business.
    """
    
    hours_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hoursTypeId') }})
    periods: Optional[list[shared_timeperiod.TimePeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    
