import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricfilter as shared_metricfilter

class MetricFilterClauseOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    OR = "OR"
    AND = "AND"


@dataclass_json
@dataclasses.dataclass
class MetricFilterClause:
    r"""MetricFilterClause
    Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
    """
    
    filters: Optional[list[shared_metricfilter.MetricFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    operator: Optional[MetricFilterClauseOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
