import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import doublerange as shared_doublerange


@dataclass_json
@dataclasses.dataclass
class DoubleMatcher:
    r"""DoubleMatcher
    Specifies the way to match a double value.
    """
    
    exact: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    range: Optional[shared_doublerange.DoubleRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
