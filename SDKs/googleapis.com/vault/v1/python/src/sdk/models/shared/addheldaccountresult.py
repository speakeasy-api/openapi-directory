import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import heldaccount as shared_heldaccount
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class AddHeldAccountResult:
    r"""AddHeldAccountResult
    The status of each account creation, and the **HeldAccount**, if successful.
    """
    
    account: Optional[shared_heldaccount.HeldAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
