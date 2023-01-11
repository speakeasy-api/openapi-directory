import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modifyindividualstudentsoptions as shared_modifyindividualstudentsoptions

class ModifyAnnouncementAssigneesRequestAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"


@dataclass_json
@dataclasses.dataclass
class ModifyAnnouncementAssigneesRequest:
    r"""ModifyAnnouncementAssigneesRequest
    Request to modify assignee mode and options of an announcement.
    """
    
    assignee_mode: Optional[ModifyAnnouncementAssigneesRequestAssigneeModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigneeMode') }})
    modify_individual_students_options: Optional[shared_modifyindividualstudentsoptions.ModifyIndividualStudentsOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifyIndividualStudentsOptions') }})
    
