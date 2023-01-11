import dataclasses
from typing import Optional


@dataclasses.dataclass
class Address:
    r"""Address
    Address
    """
    
    line1: Optional[str] = dataclasses.field(default=None)
    line2: Optional[str] = dataclasses.field(default=None)
    line3: Optional[str] = dataclasses.field(default=None)
    
