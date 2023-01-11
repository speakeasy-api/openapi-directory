import dataclasses
from typing import Optional
from ..shared import example15 as shared_example15


@dataclasses.dataclass
class LocalesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example15s: Optional[list[shared_example15.Example15]] = dataclasses.field(default=None)
    
