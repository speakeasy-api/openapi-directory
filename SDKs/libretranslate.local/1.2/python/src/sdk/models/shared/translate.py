import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Translate:
    translated_text: Optional[Any] = dataclasses.field(default=None)
    
