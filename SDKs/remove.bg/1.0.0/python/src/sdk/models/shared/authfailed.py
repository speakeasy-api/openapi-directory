import dataclasses
from typing import Optional


@dataclasses.dataclass
class AuthFailedErrors:
    title: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AuthFailed:
    errors: Optional[list[AuthFailedErrors]] = dataclasses.field(default=None)
    
