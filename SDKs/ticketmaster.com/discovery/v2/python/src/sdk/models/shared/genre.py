import dataclasses
from typing import Optional


@dataclasses.dataclass
class Genre:
    r"""Genre
    Secondary Genre
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
