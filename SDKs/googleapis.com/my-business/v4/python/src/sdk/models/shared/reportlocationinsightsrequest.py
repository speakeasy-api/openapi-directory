import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicmetricsrequest as shared_basicmetricsrequest
from ..shared import drivingdirectionmetricsrequest as shared_drivingdirectionmetricsrequest


@dataclass_json
@dataclasses.dataclass
class ReportLocationInsightsRequest:
    r"""ReportLocationInsightsRequest
    Request message for Insights.ReportLocationInsights.
    """
    
    basic_request: Optional[shared_basicmetricsrequest.BasicMetricsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicRequest') }})
    driving_directions_request: Optional[shared_drivingdirectionmetricsrequest.DrivingDirectionMetricsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivingDirectionsRequest') }})
    location_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationNames') }})
    
