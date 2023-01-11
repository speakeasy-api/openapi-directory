import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import localtime as shared_localtime


@dataclasses.dataclass
class EndDates:
    r"""EndDates
    Event's End Dates
    """
    
    approximate: Optional[bool] = dataclasses.field(default=None)
    date_time: Optional[datetime] = dataclasses.field(default=None)
    local_date: Optional[date] = dataclasses.field(default=None)
    local_time: Optional[shared_localtime.LocalTime] = dataclasses.field(default=None)
    no_specific_time: Optional[bool] = dataclasses.field(default=None)
    
