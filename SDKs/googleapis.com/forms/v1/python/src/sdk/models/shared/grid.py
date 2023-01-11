import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choicequestion as shared_choicequestion
from ..shared import choicequestion as shared_choicequestion


@dataclass_json
@dataclasses.dataclass
class GridInput:
    r"""GridInput
    A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
    """
    
    columns: Optional[shared_choicequestion.ChoiceQuestionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    shuffle_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleQuestions') }})
    

@dataclass_json
@dataclasses.dataclass
class Grid:
    r"""Grid
    A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
    """
    
    columns: Optional[shared_choicequestion.ChoiceQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    shuffle_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleQuestions') }})
    
