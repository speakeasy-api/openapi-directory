import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue
from ..shared import rowdimensions as shared_rowdimensions


@dataclass_json
@dataclasses.dataclass
class FilteredBidCreativeRow:
    r"""FilteredBidCreativeRow
    The number of filtered bids with the specified dimension values that have the specified creative.
    """
    
    bid_count: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    row_dimensions: Optional[shared_rowdimensions.RowDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
