import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedvalue as shared_extendedvalue


@dataclass_json
@dataclasses.dataclass
class PivotGroupSortValueBucket:
    r"""PivotGroupSortValueBucket
    Information about which values in a pivot group should be used for sorting.
    """
    
    buckets: Optional[list[shared_extendedvalue.ExtendedValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    values_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuesIndex') }})
    
