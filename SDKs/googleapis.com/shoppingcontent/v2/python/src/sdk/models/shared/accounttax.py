import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttaxtaxrule as shared_accounttaxtaxrule


@dataclass_json
@dataclasses.dataclass
class AccountTax:
    r"""AccountTax
    The tax settings of a merchant account. All methods require the admin role.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rules: Optional[list[shared_accounttaxtaxrule.AccountTaxTaxRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
