import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import option as shared_option
from ..shared import option as shared_option

class ChoiceQuestionTypeEnum(str, Enum):
    CHOICE_TYPE_UNSPECIFIED = "CHOICE_TYPE_UNSPECIFIED"
    RADIO = "RADIO"
    CHECKBOX = "CHECKBOX"
    DROP_DOWN = "DROP_DOWN"


@dataclass_json
@dataclasses.dataclass
class ChoiceQuestionInput:
    r"""ChoiceQuestionInput
    A radio/checkbox/dropdown question.
    """
    
    options: Optional[list[shared_option.OptionInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    shuffle: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffle') }})
    type: Optional[ChoiceQuestionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ChoiceQuestion:
    r"""ChoiceQuestion
    A radio/checkbox/dropdown question.
    """
    
    options: Optional[list[shared_option.Option]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    shuffle: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffle') }})
    type: Optional[ChoiceQuestionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
