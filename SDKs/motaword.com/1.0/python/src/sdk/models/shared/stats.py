import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientstats as shared_clientstats
from ..shared import vendorstats as shared_vendorstats


@dataclass_json
@dataclasses.dataclass
class Stats:
    client: Optional[shared_clientstats.ClientStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    vendor: Optional[shared_vendorstats.VendorStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    
