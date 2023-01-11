import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choicequestion as shared_choicequestion
from ..shared import datequestion as shared_datequestion
from ..shared import fileuploadquestion as shared_fileuploadquestion
from ..shared import grading as shared_grading
from ..shared import rowquestion as shared_rowquestion
from ..shared import scalequestion as shared_scalequestion
from ..shared import textquestion as shared_textquestion
from ..shared import timequestion as shared_timequestion
from ..shared import choicequestion as shared_choicequestion


@dataclass_json
@dataclasses.dataclass
class QuestionInput:
    r"""QuestionInput
    Any question. The specific type of question is known by its `kind`.
    """
    
    choice_question: Optional[shared_choicequestion.ChoiceQuestionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choiceQuestion') }})
    date_question: Optional[shared_datequestion.DateQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateQuestion') }})
    file_upload_question: Optional[shared_fileuploadquestion.FileUploadQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadQuestion') }})
    grading: Optional[shared_grading.Grading] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grading') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    row_question: Optional[shared_rowquestion.RowQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowQuestion') }})
    scale_question: Optional[shared_scalequestion.ScaleQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleQuestion') }})
    text_question: Optional[shared_textquestion.TextQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textQuestion') }})
    time_question: Optional[shared_timequestion.TimeQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeQuestion') }})
    

@dataclass_json
@dataclasses.dataclass
class Question:
    r"""Question
    Any question. The specific type of question is known by its `kind`.
    """
    
    choice_question: Optional[shared_choicequestion.ChoiceQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choiceQuestion') }})
    date_question: Optional[shared_datequestion.DateQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateQuestion') }})
    file_upload_question: Optional[shared_fileuploadquestion.FileUploadQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadQuestion') }})
    grading: Optional[shared_grading.Grading] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grading') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    row_question: Optional[shared_rowquestion.RowQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowQuestion') }})
    scale_question: Optional[shared_scalequestion.ScaleQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleQuestion') }})
    text_question: Optional[shared_textquestion.TextQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textQuestion') }})
    time_question: Optional[shared_timequestion.TimeQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeQuestion') }})
    
