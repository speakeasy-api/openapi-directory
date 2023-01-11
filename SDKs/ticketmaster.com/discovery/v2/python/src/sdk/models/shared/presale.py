import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Presale:
    r"""Presale
    Event's Presale Info
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    end_date_time: Optional[datetime] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    start_date_time: Optional[datetime] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
