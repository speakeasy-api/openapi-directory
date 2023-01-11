import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativesize as shared_creativesize
from ..shared import dayparttargeting as shared_dayparttargeting


@dataclass_json
@dataclasses.dataclass
class TargetingValue:
    r"""TargetingValue
    A polymorphic targeting value used as part of Shared Targeting.
    """
    
    creative_size_value: Optional[shared_creativesize.CreativeSize] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeValue') }})
    day_part_targeting_value: Optional[shared_dayparttargeting.DayPartTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargetingValue') }})
    long_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
