import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InvestmentHoldingsGetRequestOptions:
    r"""InvestmentHoldingsGetRequestOptions
    An optional object to filter `/investments/holdings/get` results. If provided, must not be `null`.
    """
    
    account_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ids') }})
    
