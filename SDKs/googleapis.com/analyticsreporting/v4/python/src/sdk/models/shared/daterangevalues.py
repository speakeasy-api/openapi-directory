import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pivotvalueregion as shared_pivotvalueregion


@dataclass_json
@dataclasses.dataclass
class DateRangeValues:
    r"""DateRangeValues
    Used to return a list of metrics for a single DateRange / dimension combination
    """
    
    pivot_value_regions: Optional[list[shared_pivotvalueregion.PivotValueRegion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotValueRegions') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
