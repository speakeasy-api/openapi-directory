import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue
from ..shared import rowdimensions as shared_rowdimensions

class NonBillableWinningBidStatusRowStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    AD_NOT_RENDERED = "AD_NOT_RENDERED"
    INVALID_IMPRESSION = "INVALID_IMPRESSION"
    FATAL_VAST_ERROR = "FATAL_VAST_ERROR"
    LOST_IN_MEDIATION = "LOST_IN_MEDIATION"


@dataclass_json
@dataclasses.dataclass
class NonBillableWinningBidStatusRow:
    r"""NonBillableWinningBidStatusRow
    The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
    """
    
    bid_count: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    row_dimensions: Optional[shared_rowdimensions.RowDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    status: Optional[NonBillableWinningBidStatusRowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
