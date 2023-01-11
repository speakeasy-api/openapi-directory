import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import chartgrouprule as shared_chartgrouprule
from ..shared import chartsourcerange as shared_chartsourcerange

class ChartDataAggregateTypeEnum(str, Enum):
    CHART_AGGREGATE_TYPE_UNSPECIFIED = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
    AVERAGE = "AVERAGE"
    COUNT = "COUNT"
    MAX = "MAX"
    MEDIAN = "MEDIAN"
    MIN = "MIN"
    SUM = "SUM"


@dataclass_json
@dataclasses.dataclass
class ChartData:
    r"""ChartData
    The data included in a domain or series.
    """
    
    aggregate_type: Optional[ChartDataAggregateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateType') }})
    column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnReference') }})
    group_rule: Optional[shared_chartgrouprule.ChartGroupRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupRule') }})
    source_range: Optional[shared_chartsourcerange.ChartSourceRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRange') }})
    
