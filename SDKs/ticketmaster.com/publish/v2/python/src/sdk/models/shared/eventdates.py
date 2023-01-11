import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessdates as shared_accessdates
from ..shared import enddates as shared_enddates
from ..shared import startdates as shared_startdates
from ..shared import eventstatus as shared_eventstatus


@dataclass_json
@dataclasses.dataclass
class EventDates:
    r"""EventDates
    Event's Dates
    """
    
    access: Optional[shared_accessdates.AccessDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    end: Optional[shared_enddates.EndDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[shared_startdates.StartDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    status: Optional[shared_eventstatus.EventStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
