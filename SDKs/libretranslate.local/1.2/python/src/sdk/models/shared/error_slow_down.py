import dataclasses
from typing import Optional


@dataclasses.dataclass
class ErrorSlowDown:
    error: Optional[str] = dataclasses.field(default=None)
    
