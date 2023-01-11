import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SpecNoTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
