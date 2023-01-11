import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountdetails as shared_accountdetails


@dataclass_json
@dataclasses.dataclass
class AccountList:
    r"""AccountList
    List of accounts with details.
    
    """
    
    accounts: list[shared_accountdetails.AccountDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    
