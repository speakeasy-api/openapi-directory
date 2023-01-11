import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PageviewsCountsTimeRangeEnum(str, Enum):
    ALL_TIME = "ALL_TIME"
    THIRTY_DAYS = "THIRTY_DAYS"
    SEVEN_DAYS = "SEVEN_DAYS"


@dataclass_json
@dataclasses.dataclass
class PageviewsCounts:
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    time_range: Optional[PageviewsCountsTimeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    

@dataclass_json
@dataclasses.dataclass
class Pageviews:
    blog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blogId') }})
    counts: Optional[list[PageviewsCounts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
