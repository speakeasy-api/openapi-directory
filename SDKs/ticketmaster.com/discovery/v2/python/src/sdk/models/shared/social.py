import dataclasses
from typing import Optional
from ..shared import twitter as shared_twitter


@dataclasses.dataclass
class Social:
    r"""Social
    Social networks data
    """
    
    twitter: Optional[shared_twitter.Twitter] = dataclasses.field(default=None)
    
