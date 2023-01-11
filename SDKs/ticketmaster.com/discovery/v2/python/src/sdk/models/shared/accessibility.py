import dataclasses
from typing import Optional


@dataclasses.dataclass
class Accessibility:
    r"""Accessibility
    Additional information for people who experience disabilities
    """
    
    info: Optional[str] = dataclasses.field(default=None)
    
