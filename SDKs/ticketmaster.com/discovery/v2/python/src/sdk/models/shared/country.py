import dataclasses
from typing import Optional


@dataclasses.dataclass
class Country:
    r"""Country
    Country
    """
    
    country_code: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
