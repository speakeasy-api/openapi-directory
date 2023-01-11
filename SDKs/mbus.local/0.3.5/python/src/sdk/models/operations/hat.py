import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class HatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    hat: Optional[Any] = dataclasses.field(default=None)
    text_error: Optional[str] = dataclasses.field(default=None)
    
