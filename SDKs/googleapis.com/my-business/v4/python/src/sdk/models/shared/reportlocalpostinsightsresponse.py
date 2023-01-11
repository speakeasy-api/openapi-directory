import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localpostmetrics as shared_localpostmetrics


@dataclass_json
@dataclasses.dataclass
class ReportLocalPostInsightsResponse:
    r"""ReportLocalPostInsightsResponse
    Response message for Insights.ReportLocalPostInsights
    """
    
    local_post_metrics: Optional[list[shared_localpostmetrics.LocalPostMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostMetrics') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
