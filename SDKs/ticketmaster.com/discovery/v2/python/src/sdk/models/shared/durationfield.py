import dataclasses
from typing import Optional
from ..shared import durationfieldtype as shared_durationfieldtype


@dataclasses.dataclass
class DurationField:
    name: Optional[str] = dataclasses.field(default=None)
    precise: Optional[bool] = dataclasses.field(default=None)
    supported: Optional[bool] = dataclasses.field(default=None)
    type: Optional[shared_durationfieldtype.DurationFieldType] = dataclasses.field(default=None)
    unit_millis: Optional[int] = dataclasses.field(default=None)
    
