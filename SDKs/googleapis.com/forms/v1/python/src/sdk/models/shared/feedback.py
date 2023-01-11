import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extramaterial as shared_extramaterial


@dataclass_json
@dataclasses.dataclass
class Feedback:
    r"""Feedback
    Feedback for a respondent about their response to a question.
    """
    
    material: Optional[list[shared_extramaterial.ExtraMaterial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('material') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
