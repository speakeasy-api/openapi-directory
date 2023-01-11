import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import course as shared_course


@dataclass_json
@dataclasses.dataclass
class ListCoursesResponse:
    r"""ListCoursesResponse
    Response when listing courses.
    """
    
    courses: Optional[list[shared_course.Course]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courses') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
