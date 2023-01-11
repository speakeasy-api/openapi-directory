import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval as shared_googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries:
    r"""GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
    A time series representing conversations over time.
    """
    
    interval_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalDuration') }})
    points: Optional[list[shared_googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval.GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    
