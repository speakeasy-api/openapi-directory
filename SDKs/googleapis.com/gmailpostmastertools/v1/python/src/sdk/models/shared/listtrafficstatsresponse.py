import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trafficstats as shared_trafficstats


@dataclass_json
@dataclasses.dataclass
class ListTrafficStatsResponse:
    r"""ListTrafficStatsResponse
    Response message for ListTrafficStats.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    traffic_stats: Optional[list[shared_trafficstats.TrafficStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficStats') }})
    
