import dataclasses
from typing import Optional
from ..shared import example110 as shared_example110


@dataclasses.dataclass
class StatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example110: Optional[shared_example110.Example110] = dataclasses.field(default=None)
    
