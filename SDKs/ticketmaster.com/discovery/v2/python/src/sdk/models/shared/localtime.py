import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import chronology as shared_chronology
from ..shared import datetimefieldtype as shared_datetimefieldtype
from ..shared import datetimefield as shared_datetimefield


@dataclasses.dataclass
class LocalTime:
    chronology: Optional[shared_chronology.Chronology] = dataclasses.field(default=None)
    field_types: Optional[list[shared_datetimefieldtype.DateTimeFieldType]] = dataclasses.field(default=None)
    fields: Optional[list[shared_datetimefield.DateTimeField]] = dataclasses.field(default=None)
    hour_of_day: Optional[int] = dataclasses.field(default=None)
    millis_of_day: Optional[int] = dataclasses.field(default=None)
    millis_of_second: Optional[int] = dataclasses.field(default=None)
    minute_of_hour: Optional[int] = dataclasses.field(default=None)
    second_of_minute: Optional[int] = dataclasses.field(default=None)
    values: Optional[list[int]] = dataclasses.field(default=None)
    
