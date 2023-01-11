import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SegmentDimensionFilterOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    REGEXP = "REGEXP"
    BEGINS_WITH = "BEGINS_WITH"
    ENDS_WITH = "ENDS_WITH"
    PARTIAL = "PARTIAL"
    EXACT = "EXACT"
    IN_LIST = "IN_LIST"
    NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN"
    NUMERIC_GREATER_THAN = "NUMERIC_GREATER_THAN"
    NUMERIC_BETWEEN = "NUMERIC_BETWEEN"


@dataclass_json
@dataclasses.dataclass
class SegmentDimensionFilter:
    r"""SegmentDimensionFilter
    Dimension filter specifies the filtering options on a dimension.
    """
    
    case_sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    dimension_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    expressions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    max_comparison_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxComparisonValue') }})
    min_comparison_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minComparisonValue') }})
    operator: Optional[SegmentDimensionFilterOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
