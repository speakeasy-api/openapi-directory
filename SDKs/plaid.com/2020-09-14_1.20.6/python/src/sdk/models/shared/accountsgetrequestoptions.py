import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AccountsGetRequestOptions:
    r"""AccountsGetRequestOptions
    An optional object to filter `/accounts/get` results.
    """
    
    account_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ids') }})
    
