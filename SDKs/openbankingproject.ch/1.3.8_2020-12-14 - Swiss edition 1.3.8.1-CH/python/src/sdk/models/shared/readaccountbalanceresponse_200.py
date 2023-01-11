import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import balance as shared_balance


@dataclass_json
@dataclasses.dataclass
class ReadAccountBalanceResponse200:
    r"""ReadAccountBalanceResponse200
    Body of the response for a successful read balance for an account request.
    """
    
    balances: list[shared_balance.Balance] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    account: Optional[shared_accountreference16_ch.AccountReference16Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    
