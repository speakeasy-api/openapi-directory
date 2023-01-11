import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue
from ..shared import rowdimensions as shared_rowdimensions

class BidResponseWithoutBidsStatusRowStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    RESPONSES_WITHOUT_BIDS = "RESPONSES_WITHOUT_BIDS"
    RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"
    RESPONSES_WITHOUT_BIDS_FOR_DEAL = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"


@dataclass_json
@dataclasses.dataclass
class BidResponseWithoutBidsStatusRow:
    r"""BidResponseWithoutBidsStatusRow
    The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
    """
    
    impression_count: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionCount') }})
    row_dimensions: Optional[shared_rowdimensions.RowDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    status: Optional[BidResponseWithoutBidsStatusRowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
