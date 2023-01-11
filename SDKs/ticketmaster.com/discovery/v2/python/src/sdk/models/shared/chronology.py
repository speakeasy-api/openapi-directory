import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import datetimezone as shared_datetimezone


@dataclasses.dataclass
class Chronology:
    zone: Optional[shared_datetimezone.DateTimeZone] = dataclasses.field(default=None)
    
