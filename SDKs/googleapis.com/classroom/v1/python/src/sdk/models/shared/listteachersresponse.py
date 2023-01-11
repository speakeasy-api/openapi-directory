import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teacher as shared_teacher


@dataclass_json
@dataclasses.dataclass
class ListTeachersResponse:
    r"""ListTeachersResponse
    Response when listing teachers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    teachers: Optional[list[shared_teacher.Teacher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teachers') }})
    
