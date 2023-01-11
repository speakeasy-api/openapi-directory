import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import balance as shared_balance
from ..shared import accountreport as shared_accountreport


@dataclass_json
@dataclasses.dataclass
class TransactionsResponse200JSON:
    r"""TransactionsResponse200JSON
    Body of the JSON response for a successful read transaction list request.
    This account report contains transactions resulting from the query parameters.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account: Optional[shared_accountreference16_ch.AccountReference16Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    balances: Optional[list[shared_balance.Balance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    transactions: Optional[shared_accountreport.AccountReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
