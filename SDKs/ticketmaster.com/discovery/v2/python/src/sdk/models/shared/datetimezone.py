import dataclasses
from typing import Optional


@dataclasses.dataclass
class DateTimeZone:
    fixed: Optional[bool] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    
