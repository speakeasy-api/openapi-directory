import dataclasses
from typing import Optional


@dataclasses.dataclass
class DurationFieldType:
    name: Optional[str] = dataclasses.field(default=None)
    
