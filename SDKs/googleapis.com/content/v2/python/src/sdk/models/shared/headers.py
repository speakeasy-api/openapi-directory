import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationidset as shared_locationidset
from ..shared import price as shared_price
from ..shared import weight as shared_weight


@dataclass_json
@dataclasses.dataclass
class Headers:
    r"""Headers
    A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
    """
    
    locations: Optional[list[shared_locationidset.LocationIDSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    number_of_items: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfItems') }})
    postal_code_group_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeGroupNames') }})
    prices: Optional[list[shared_price.Price]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    weights: Optional[list[shared_weight.Weight]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weights') }})
    
