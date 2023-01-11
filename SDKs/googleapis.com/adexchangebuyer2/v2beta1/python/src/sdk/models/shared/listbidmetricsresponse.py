import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bidmetricsrow as shared_bidmetricsrow


@dataclass_json
@dataclasses.dataclass
class ListBidMetricsResponse:
    r"""ListBidMetricsResponse
    Response message for listing the metrics that are measured in number of bids.
    """
    
    bid_metrics_rows: Optional[list[shared_bidmetricsrow.BidMetricsRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidMetricsRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
