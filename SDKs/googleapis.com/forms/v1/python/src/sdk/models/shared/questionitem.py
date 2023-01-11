import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import question as shared_question
from ..shared import image as shared_image
from ..shared import question as shared_question


@dataclass_json
@dataclasses.dataclass
class QuestionItemInput:
    r"""QuestionItemInput
    A form item containing a single question.
    """
    
    image: Optional[shared_image.ImageInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    question: Optional[shared_question.QuestionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclasses.dataclass
class QuestionItem:
    r"""QuestionItem
    A form item containing a single question.
    """
    
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    question: Optional[shared_question.Question] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    
