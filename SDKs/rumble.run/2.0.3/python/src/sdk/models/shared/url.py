import dataclasses
from typing import Optional


@dataclasses.dataclass
class URL:
    r"""URL
    A URL to a resource
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    
