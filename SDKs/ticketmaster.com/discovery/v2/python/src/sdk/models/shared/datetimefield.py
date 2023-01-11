import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import durationfield as shared_durationfield
from ..shared import datetimefieldtype as shared_datetimefieldtype


@dataclasses.dataclass
class DateTimeField:
    duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None)
    leap_duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None)
    lenient: Optional[bool] = dataclasses.field(default=None)
    maximum_value: Optional[int] = dataclasses.field(default=None)
    minimum_value: Optional[int] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    range_duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None)
    supported: Optional[bool] = dataclasses.field(default=None)
    type: Optional[shared_datetimefieldtype.DateTimeFieldType] = dataclasses.field(default=None)
    
