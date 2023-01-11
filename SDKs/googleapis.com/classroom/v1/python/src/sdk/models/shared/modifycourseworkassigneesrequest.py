import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modifyindividualstudentsoptions as shared_modifyindividualstudentsoptions

class ModifyCourseWorkAssigneesRequestAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"


@dataclass_json
@dataclasses.dataclass
class ModifyCourseWorkAssigneesRequest:
    r"""ModifyCourseWorkAssigneesRequest
    Request to modify assignee mode and options of a coursework.
    """
    
    assignee_mode: Optional[ModifyCourseWorkAssigneesRequestAssigneeModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigneeMode') }})
    modify_individual_students_options: Optional[shared_modifyindividualstudentsoptions.ModifyIndividualStudentsOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifyIndividualStudentsOptions') }})
    
