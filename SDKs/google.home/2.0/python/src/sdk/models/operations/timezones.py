import dataclasses
from typing import Optional
from ..shared import example14 as shared_example14


@dataclasses.dataclass
class TimezonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example14s: Optional[list[shared_example14.Example14]] = dataclasses.field(default=None)
    
