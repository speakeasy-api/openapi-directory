import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import heldaccount as shared_heldaccount


@dataclass_json
@dataclasses.dataclass
class ListHeldAccountsResponse:
    r"""ListHeldAccountsResponse
    Returns a list of the accounts covered by a hold.
    """
    
    accounts: Optional[list[shared_heldaccount.HeldAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    
