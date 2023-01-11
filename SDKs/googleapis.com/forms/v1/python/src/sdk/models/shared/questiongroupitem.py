import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grid as shared_grid
from ..shared import image as shared_image
from ..shared import question as shared_question
from ..shared import grid as shared_grid
from ..shared import image as shared_image
from ..shared import question as shared_question


@dataclass_json
@dataclasses.dataclass
class QuestionGroupItemInput:
    r"""QuestionGroupItemInput
    Defines a question that comprises multiple questions grouped together.
    """
    
    grid: Optional[shared_grid.GridInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid') }})
    image: Optional[shared_image.ImageInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    questions: Optional[list[shared_question.QuestionInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclass_json
@dataclasses.dataclass
class QuestionGroupItem:
    r"""QuestionGroupItem
    Defines a question that comprises multiple questions grouped together.
    """
    
    grid: Optional[shared_grid.Grid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid') }})
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    questions: Optional[list[shared_question.Question]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    
