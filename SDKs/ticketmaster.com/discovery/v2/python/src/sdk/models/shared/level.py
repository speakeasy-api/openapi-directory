import dataclasses
from typing import Optional


@dataclasses.dataclass
class Level:
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
