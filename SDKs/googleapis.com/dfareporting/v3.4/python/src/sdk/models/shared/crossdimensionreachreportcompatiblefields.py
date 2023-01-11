import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class CrossDimensionReachReportCompatibleFields:
    r"""CrossDimensionReachReportCompatibleFields
    Represents fields that are compatible to be selected for a report of type \"CROSS_DIMENSION_REACH\".
    """
    
    breakdown: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakdown') }})
    dimension_filters: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    overlap_metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlapMetrics') }})
    
