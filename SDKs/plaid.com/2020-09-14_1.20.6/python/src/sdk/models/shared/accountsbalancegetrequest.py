import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountsbalancegetrequestoptions as shared_accountsbalancegetrequestoptions


@dataclass_json
@dataclasses.dataclass
class AccountsBalanceGetRequest:
    r"""AccountsBalanceGetRequest
    AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_accountsbalancegetrequestoptions.AccountsBalanceGetRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
