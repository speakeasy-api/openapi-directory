import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import multiplechoicesubmission as shared_multiplechoicesubmission
from ..shared import shortanswersubmission as shared_shortanswersubmission
from ..shared import submissionhistory as shared_submissionhistory

class StudentSubmissionCourseWorkTypeEnum(str, Enum):
    COURSE_WORK_TYPE_UNSPECIFIED = "COURSE_WORK_TYPE_UNSPECIFIED"
    ASSIGNMENT = "ASSIGNMENT"
    SHORT_ANSWER_QUESTION = "SHORT_ANSWER_QUESTION"
    MULTIPLE_CHOICE_QUESTION = "MULTIPLE_CHOICE_QUESTION"

class StudentSubmissionStateEnum(str, Enum):
    SUBMISSION_STATE_UNSPECIFIED = "SUBMISSION_STATE_UNSPECIFIED"
    NEW = "NEW"
    CREATED = "CREATED"
    TURNED_IN = "TURNED_IN"
    RETURNED = "RETURNED"
    RECLAIMED_BY_STUDENT = "RECLAIMED_BY_STUDENT"


@dataclass_json
@dataclasses.dataclass
class StudentSubmission:
    r"""StudentSubmission
    Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
    """
    
    alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    assigned_grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedGrade') }})
    assignment_submission: Optional[shared_assignmentsubmission.AssignmentSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignmentSubmission') }})
    associated_with_developer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedWithDeveloper') }})
    course_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    course_work_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkId') }})
    course_work_type: Optional[StudentSubmissionCourseWorkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkType') }})
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    draft_grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draftGrade') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    late: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('late') }})
    multiple_choice_submission: Optional[shared_multiplechoicesubmission.MultipleChoiceSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleChoiceSubmission') }})
    short_answer_submission: Optional[shared_shortanswersubmission.ShortAnswerSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortAnswerSubmission') }})
    state: Optional[StudentSubmissionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_history: Optional[list[shared_submissionhistory.SubmissionHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionHistory') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
