import dataclasses
from typing import Optional


@dataclasses.dataclass
class ExternalLink:
    r"""ExternalLink
    ExternalLink
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
