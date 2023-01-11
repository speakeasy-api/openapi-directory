import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiod as shared_timeperiod
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class FreeBusyCalendar:
    r"""FreeBusyCalendar
    Free/busy expansions for a single calendar.
    """
    
    busy: Optional[list[shared_timeperiod.TimePeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('busy') }})
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
