import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ErrorLimit:
    code: str = dataclasses.field()
    retry_after_sec: int = dataclasses.field()
    fields: Optional[list[Any]] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    
