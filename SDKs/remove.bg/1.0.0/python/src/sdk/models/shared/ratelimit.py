import dataclasses
from typing import Optional


@dataclasses.dataclass
class RateLimitErrors:
    title: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RateLimit:
    errors: Optional[list[RateLimitErrors]] = dataclasses.field(default=None)
    
