import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userprofile as shared_userprofile


@dataclass_json
@dataclasses.dataclass
class Teacher:
    r"""Teacher
    Teacher of a course.
    """
    
    course_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    profile: Optional[shared_userprofile.UserProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
