import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import accessdates as shared_accessdates
from ..shared import enddates as shared_enddates
from ..shared import startdates as shared_startdates
from ..shared import eventstatus as shared_eventstatus


@dataclasses.dataclass
class EventDates:
    r"""EventDates
    Event's Dates
    """
    
    access: Optional[shared_accessdates.AccessDates] = dataclasses.field(default=None)
    end: Optional[shared_enddates.EndDates] = dataclasses.field(default=None)
    span_multiple_days: Optional[bool] = dataclasses.field(default=None)
    start: Optional[shared_startdates.StartDates] = dataclasses.field(default=None)
    status: Optional[shared_eventstatus.EventStatus] = dataclasses.field(default=None)
    timezone: Optional[str] = dataclasses.field(default=None)
    
