import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentdimensionfilter as shared_segmentdimensionfilter
from ..shared import segmentmetricfilter as shared_segmentmetricfilter


@dataclass_json
@dataclasses.dataclass
class SegmentFilterClause:
    r"""SegmentFilterClause
    Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
    """
    
    dimension_filter: Optional[shared_segmentdimensionfilter.SegmentDimensionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    metric_filter: Optional[shared_segmentmetricfilter.SegmentMetricFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    not_: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not') }})
    
