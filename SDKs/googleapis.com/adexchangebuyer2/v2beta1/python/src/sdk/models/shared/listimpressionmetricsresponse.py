import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import impressionmetricsrow as shared_impressionmetricsrow


@dataclass_json
@dataclasses.dataclass
class ListImpressionMetricsResponse:
    r"""ListImpressionMetricsResponse
    Response message for listing the metrics that are measured in number of impressions.
    """
    
    impression_metrics_rows: Optional[list[shared_impressionmetricsrow.ImpressionMetricsRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionMetricsRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
