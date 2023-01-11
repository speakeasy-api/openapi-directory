import dataclasses
from typing import Optional


@dataclasses.dataclass
class MapPair:
    key_value: Optional[str] = dataclasses.field(default=None)
    string_value: Optional[str] = dataclasses.field(default=None)
    
