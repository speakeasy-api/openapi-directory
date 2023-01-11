import dataclasses
from typing import Optional
from ..shared import durationfieldtype as shared_durationfieldtype


@dataclasses.dataclass
class DateTimeFieldType:
    duration_type: Optional[shared_durationfieldtype.DurationFieldType] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    range_duration_type: Optional[shared_durationfieldtype.DurationFieldType] = dataclasses.field(default=None)
    
