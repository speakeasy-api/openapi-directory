import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interval as shared_interval


@dataclass_json
@dataclasses.dataclass
class IntervalCollection:
    base_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCurrency') }})
    intervals: Optional[list[shared_interval.Interval]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervals') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    
