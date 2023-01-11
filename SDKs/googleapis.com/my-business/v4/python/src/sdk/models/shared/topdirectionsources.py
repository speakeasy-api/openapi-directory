import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regioncount as shared_regioncount


@dataclass_json
@dataclasses.dataclass
class TopDirectionSources:
    r"""TopDirectionSources
    Top regions where driving-direction requests originated from.
    """
    
    day_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayCount') }})
    region_counts: Optional[list[shared_regioncount.RegionCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCounts') }})
    
