import dataclasses
from typing import Optional


@dataclasses.dataclass
class Privileges:
    description: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    short_description: Optional[str] = dataclasses.field(default=None)
    
