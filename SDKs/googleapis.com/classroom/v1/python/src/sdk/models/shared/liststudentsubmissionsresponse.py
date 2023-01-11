import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studentsubmission as shared_studentsubmission


@dataclass_json
@dataclasses.dataclass
class ListStudentSubmissionsResponse:
    r"""ListStudentSubmissionsResponse
    Response when listing student submissions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    student_submissions: Optional[list[shared_studentsubmission.StudentSubmission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentSubmissions') }})
    
