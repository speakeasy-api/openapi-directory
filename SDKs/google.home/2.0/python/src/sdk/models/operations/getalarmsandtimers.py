import dataclasses
from typing import Optional
from ..shared import example18 as shared_example18


@dataclasses.dataclass
class GetAlarmsandTimersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example18: Optional[shared_example18.Example18] = dataclasses.field(default=None)
    
