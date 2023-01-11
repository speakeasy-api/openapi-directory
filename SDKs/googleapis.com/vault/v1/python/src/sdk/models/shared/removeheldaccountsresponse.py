import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class RemoveHeldAccountsResponse:
    r"""RemoveHeldAccountsResponse
    Response for batch delete held accounts.
    """
    
    statuses: Optional[list[shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
