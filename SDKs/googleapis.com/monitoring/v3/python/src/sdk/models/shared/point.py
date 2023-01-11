import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinterval as shared_timeinterval
from ..shared import typedvalue as shared_typedvalue


@dataclass_json
@dataclasses.dataclass
class Point:
    r"""Point
    A single data point in a time series.
    """
    
    interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    value: Optional[shared_typedvalue.TypedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
