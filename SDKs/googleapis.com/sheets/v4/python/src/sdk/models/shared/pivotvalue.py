import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference

class PivotValueCalculatedDisplayTypeEnum(str, Enum):
    PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"
    PERCENT_OF_ROW_TOTAL = "PERCENT_OF_ROW_TOTAL"
    PERCENT_OF_COLUMN_TOTAL = "PERCENT_OF_COLUMN_TOTAL"
    PERCENT_OF_GRAND_TOTAL = "PERCENT_OF_GRAND_TOTAL"

class PivotValueSummarizeFunctionEnum(str, Enum):
    PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"
    SUM = "SUM"
    COUNTA = "COUNTA"
    COUNT = "COUNT"
    COUNTUNIQUE = "COUNTUNIQUE"
    AVERAGE = "AVERAGE"
    MAX = "MAX"
    MIN = "MIN"
    MEDIAN = "MEDIAN"
    PRODUCT = "PRODUCT"
    STDEV = "STDEV"
    STDEVP = "STDEVP"
    VAR = "VAR"
    VARP = "VARP"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclasses.dataclass
class PivotValue:
    r"""PivotValue
    The definition of how a value in a pivot table should be calculated.
    """
    
    calculated_display_type: Optional[PivotValueCalculatedDisplayTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatedDisplayType') }})
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    formula: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_column_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceColumnOffset') }})
    summarize_function: Optional[PivotValueSummarizeFunctionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summarizeFunction') }})
    
