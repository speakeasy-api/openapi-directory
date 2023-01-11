import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class AccessDates:
    r"""AccessDates
    Event's Access Date
    """
    
    end_approximate: Optional[bool] = dataclasses.field(default=None)
    end_date_time: Optional[datetime] = dataclasses.field(default=None)
    start_approximate: Optional[bool] = dataclasses.field(default=None)
    start_date_time: Optional[datetime] = dataclasses.field(default=None)
    
