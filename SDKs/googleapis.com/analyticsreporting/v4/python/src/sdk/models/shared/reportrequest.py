import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cohortgroup as shared_cohortgroup
from ..shared import daterange as shared_daterange
from ..shared import dimensionfilterclause as shared_dimensionfilterclause
from ..shared import dimension as shared_dimension
from ..shared import metricfilterclause as shared_metricfilterclause
from ..shared import metric as shared_metric
from ..shared import orderby as shared_orderby
from ..shared import pivot as shared_pivot
from ..shared import segment as shared_segment

class ReportRequestSamplingLevelEnum(str, Enum):
    SAMPLING_UNSPECIFIED = "SAMPLING_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    SMALL = "SMALL"
    LARGE = "LARGE"


@dataclass_json
@dataclasses.dataclass
class ReportRequest:
    r"""ReportRequest
    The main request class which specifies the Reporting API request.
    """
    
    cohort_group: Optional[shared_cohortgroup.CohortGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortGroup') }})
    date_ranges: Optional[list[shared_daterange.DateRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRanges') }})
    dimension_filter_clauses: Optional[list[shared_dimensionfilterclause.DimensionFilterClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterClauses') }})
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filters_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filtersExpression') }})
    hide_totals: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTotals') }})
    hide_value_ranges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideValueRanges') }})
    include_empty_rows: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeEmptyRows') }})
    metric_filter_clauses: Optional[list[shared_metricfilterclause.MetricFilterClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilterClauses') }})
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    order_bys: Optional[list[shared_orderby.OrderBy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    pivots: Optional[list[shared_pivot.Pivot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivots') }})
    sampling_level: Optional[ReportRequestSamplingLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingLevel') }})
    segments: Optional[list[shared_segment.Segment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    view_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewId') }})
    
