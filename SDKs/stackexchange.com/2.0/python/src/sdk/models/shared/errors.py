import dataclasses
from typing import Optional


@dataclasses.dataclass
class Errors:
    description: Optional[str] = dataclasses.field(default=None)
    error_id: Optional[int] = dataclasses.field(default=None)
    error_name: Optional[str] = dataclasses.field(default=None)
    
