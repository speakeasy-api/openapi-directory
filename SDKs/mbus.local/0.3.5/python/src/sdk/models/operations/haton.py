import dataclasses
from typing import Optional


@dataclasses.dataclass
class HatOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    text_error: Optional[str] = dataclasses.field(default=None)
    
