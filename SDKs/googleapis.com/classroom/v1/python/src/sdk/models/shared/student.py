import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userprofile as shared_userprofile
from ..shared import drivefolder as shared_drivefolder


@dataclass_json
@dataclasses.dataclass
class Student:
    r"""Student
    Student in a course.
    """
    
    course_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    profile: Optional[shared_userprofile.UserProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    student_work_folder: Optional[shared_drivefolder.DriveFolder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentWorkFolder') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
