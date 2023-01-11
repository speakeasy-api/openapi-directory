import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclinkeventstat as shared_dynamiclinkeventstat


@dataclass_json
@dataclasses.dataclass
class DynamicLinkStats:
    r"""DynamicLinkStats
    Analytics stats of a Dynamic Link for a given timeframe.
    """
    
    link_event_stats: Optional[list[shared_dynamiclinkeventstat.DynamicLinkEventStat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkEventStats') }})
    
