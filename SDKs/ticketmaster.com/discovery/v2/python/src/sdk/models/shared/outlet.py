import dataclasses
from typing import Optional


@dataclasses.dataclass
class Outlet:
    r"""Outlet
    A selling point for tickets.
    """
    
    type: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
