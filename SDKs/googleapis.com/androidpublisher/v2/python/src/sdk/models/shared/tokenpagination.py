import dataclasses
from typing import Optional


@dataclasses.dataclass
class TokenPagination:
    next_page_token: Optional[str] = dataclasses.field(default=None)
    previous_page_token: Optional[str] = dataclasses.field(default=None)
    
