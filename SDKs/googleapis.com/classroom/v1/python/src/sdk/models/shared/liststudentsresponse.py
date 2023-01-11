import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import student as shared_student


@dataclass_json
@dataclasses.dataclass
class ListStudentsResponse:
    r"""ListStudentsResponse
    Response when listing students.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    students: Optional[list[shared_student.Student]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('students') }})
    
