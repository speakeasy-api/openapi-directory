import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PublicSaleDates:
    r"""PublicSaleDates
    Event's Public Onsales Dates
    """
    
    end_date_time: Optional[datetime] = dataclasses.field(default=None)
    start_date_time: Optional[datetime] = dataclasses.field(default=None)
    start_tbd: Optional[bool] = dataclasses.field(default=None)
    
