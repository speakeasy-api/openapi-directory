import dataclasses
from typing import Optional


@dataclasses.dataclass
class ErrorResponse:
    error: Optional[str] = dataclasses.field(default=None)
    
