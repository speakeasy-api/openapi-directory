import dataclasses
from typing import Optional


@dataclasses.dataclass
class ErrorDetail:
    message: str = dataclasses.field()
    code: Optional[str] = dataclasses.field(default=None)
    context: Optional[dict[str, list[str]]] = dataclasses.field(default=None)
    in_: Optional[str] = dataclasses.field(default=None)
    sub_category: Optional[str] = dataclasses.field(default=None)
    
