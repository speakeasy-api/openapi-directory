import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregation as shared_aggregation


@dataclass_json
@dataclasses.dataclass
class RatioPart:
    r"""RatioPart
    Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
    """
    
    aggregation: Optional[shared_aggregation.Aggregation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
