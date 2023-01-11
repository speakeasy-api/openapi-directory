import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pulsemcqoption as shared_pulsemcqoption
from ..shared import pulsespatialoption as shared_pulsespatialoption


@dataclass_json
@dataclasses.dataclass
class PulseAnswer:
    multi_choice_answer: Optional[list[shared_pulsemcqoption.PulseMcqOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiChoiceAnswer') }})
    spatial_answer: Optional[list[shared_pulsespatialoption.PulseSpatialOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatialAnswer') }})
    text_answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnswer') }})
    
