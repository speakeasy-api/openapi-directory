import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ErrorResponse:
    code: Optional[str] = dataclasses.field(default=None)
    date_: Optional[datetime] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    
