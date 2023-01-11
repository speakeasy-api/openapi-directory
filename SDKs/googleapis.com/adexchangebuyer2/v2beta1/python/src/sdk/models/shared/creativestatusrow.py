import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue
from ..shared import rowdimensions as shared_rowdimensions


@dataclass_json
@dataclasses.dataclass
class CreativeStatusRow:
    r"""CreativeStatusRow
    The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
    """
    
    bid_count: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    creative_status_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeStatusId') }})
    row_dimensions: Optional[shared_rowdimensions.RowDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
