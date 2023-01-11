import dataclasses
from typing import Optional


@dataclasses.dataclass
class Languages:
    code: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
