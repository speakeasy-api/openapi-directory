import dataclasses
from typing import Optional
from ..shared import courseresponse as shared_courseresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCoursesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    course_responses: Optional[list[shared_courseresponse.CourseResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
