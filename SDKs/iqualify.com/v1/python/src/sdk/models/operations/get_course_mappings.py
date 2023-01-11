import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCourseMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    course_mappings: Optional[dict[str, str]] = dataclasses.field(default=None)
    
