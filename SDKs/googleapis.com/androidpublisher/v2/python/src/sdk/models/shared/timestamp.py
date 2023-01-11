import dataclasses
from typing import Optional


@dataclasses.dataclass
class Timestamp:
    nanos: Optional[int] = dataclasses.field(default=None)
    seconds: Optional[str] = dataclasses.field(default=None)
    
