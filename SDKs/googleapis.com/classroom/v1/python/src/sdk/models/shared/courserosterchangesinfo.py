import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CourseRosterChangesInfo:
    r"""CourseRosterChangesInfo
    Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
    """
    
    course_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    
