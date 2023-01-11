import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter
from ..shared import valuerange as shared_valuerange


@dataclass_json
@dataclasses.dataclass
class MatchedValueRange:
    r"""MatchedValueRange
    A value range that was matched by one or more data filers.
    """
    
    data_filters: Optional[list[shared_datafilter.DataFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    value_range: Optional[shared_valuerange.ValueRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRange') }})
    
