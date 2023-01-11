import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval:
    r"""GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval
    A single interval in a time series.
    """
    
    conversation_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCount') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
