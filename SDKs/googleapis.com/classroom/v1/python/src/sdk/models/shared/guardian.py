import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userprofile as shared_userprofile


@dataclass_json
@dataclasses.dataclass
class Guardian:
    r"""Guardian
    Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
    """
    
    guardian_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardianId') }})
    guardian_profile: Optional[shared_userprofile.UserProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardianProfile') }})
    invited_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitedEmailAddress') }})
    student_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentId') }})
    
