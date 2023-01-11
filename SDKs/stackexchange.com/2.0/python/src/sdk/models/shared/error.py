import dataclasses
from typing import Optional


@dataclasses.dataclass
class Error:
    error_id: Optional[float] = dataclasses.field(default=None)
    error_message: Optional[str] = dataclasses.field(default=None)
    error_name: Optional[str] = dataclasses.field(default=None)
    
