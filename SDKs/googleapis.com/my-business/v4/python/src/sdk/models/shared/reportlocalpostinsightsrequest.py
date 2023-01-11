import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicmetricsrequest as shared_basicmetricsrequest


@dataclass_json
@dataclasses.dataclass
class ReportLocalPostInsightsRequest:
    r"""ReportLocalPostInsightsRequest
    Request message for Insights.ReportLocalPostInsights
    """
    
    basic_request: Optional[shared_basicmetricsrequest.BasicMetricsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicRequest') }})
    local_post_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostNames') }})
    
