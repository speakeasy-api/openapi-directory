import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationdrivingdirectionmetrics as shared_locationdrivingdirectionmetrics
from ..shared import locationmetrics as shared_locationmetrics


@dataclass_json
@dataclasses.dataclass
class ReportLocationInsightsResponse:
    r"""ReportLocationInsightsResponse
    Response message for `Insights.ReportLocationInsights`.
    """
    
    location_driving_direction_metrics: Optional[list[shared_locationdrivingdirectionmetrics.LocationDrivingDirectionMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationDrivingDirectionMetrics') }})
    location_metrics: Optional[list[shared_locationmetrics.LocationMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationMetrics') }})
    
