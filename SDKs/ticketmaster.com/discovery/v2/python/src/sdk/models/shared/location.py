import dataclasses
from typing import Optional


@dataclasses.dataclass
class Location:
    r"""Location
    Location
    """
    
    latitude: Optional[float] = dataclasses.field(default=None)
    longitude: Optional[float] = dataclasses.field(default=None)
    
