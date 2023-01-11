import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coursework as shared_coursework


@dataclass_json
@dataclasses.dataclass
class ListCourseWorkResponse:
    r"""ListCourseWorkResponse
    Response when listing course work.
    """
    
    course_work: Optional[list[shared_coursework.CourseWork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWork') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
