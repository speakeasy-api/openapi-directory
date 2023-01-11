import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileuploadanswers as shared_fileuploadanswers
from ..shared import grade as shared_grade
from ..shared import textanswers as shared_textanswers


@dataclass_json
@dataclasses.dataclass
class Answer:
    file_upload_answers: Optional[shared_fileuploadanswers.FileUploadAnswers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadAnswers') }})
    grade: Optional[shared_grade.Grade] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grade') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    text_answers: Optional[shared_textanswers.TextAnswers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnswers') }})
    
