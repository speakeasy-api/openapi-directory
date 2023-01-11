import dataclasses
from typing import Optional


@dataclasses.dataclass
class VenueGeneralInfo:
    r"""VenueGeneralInfo
    Venue general information
    """
    
    child_rule: Optional[str] = dataclasses.field(default=None)
    general_rule: Optional[str] = dataclasses.field(default=None)
    
