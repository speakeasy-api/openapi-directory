import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue
from ..shared import rowdimensions as shared_rowdimensions


@dataclass_json
@dataclasses.dataclass
class FilteredBidDetailRow:
    r"""FilteredBidDetailRow
    The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
    """
    
    bid_count: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    detail_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailId') }})
    row_dimensions: Optional[shared_rowdimensions.RowDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
