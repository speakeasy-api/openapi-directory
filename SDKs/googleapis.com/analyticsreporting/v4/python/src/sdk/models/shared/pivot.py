import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionfilterclause as shared_dimensionfilterclause
from ..shared import dimension as shared_dimension
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class Pivot:
    r"""Pivot
    The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
    """
    
    dimension_filter_clauses: Optional[list[shared_dimensionfilterclause.DimensionFilterClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterClauses') }})
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    max_group_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupCount') }})
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    start_group: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startGroup') }})
    
