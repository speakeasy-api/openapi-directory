import dataclasses
from typing import Optional


@dataclasses.dataclass
class Detections:
    confidence: Optional[float] = dataclasses.field(default=None)
    language: Optional[str] = dataclasses.field(default=None)
    
