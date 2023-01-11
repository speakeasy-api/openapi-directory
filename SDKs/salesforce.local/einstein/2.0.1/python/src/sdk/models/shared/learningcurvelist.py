import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import learningcurve as shared_learningcurve


@dataclass_json
@dataclasses.dataclass
class LearningCurveList:
    data: Optional[list[shared_learningcurve.LearningCurve]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
