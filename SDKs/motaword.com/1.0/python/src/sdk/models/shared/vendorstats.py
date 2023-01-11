import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vendorearningstats as shared_vendorearningstats
from ..shared import vendorprojectstats as shared_vendorprojectstats
from ..shared import vendorwordstats as shared_vendorwordstats


@dataclass_json
@dataclasses.dataclass
class VendorStats:
    earnings: Optional[shared_vendorearningstats.VendorEarningStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earnings') }})
    projects: Optional[shared_vendorprojectstats.VendorProjectStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    words: Optional[shared_vendorwordstats.VendorWordStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
