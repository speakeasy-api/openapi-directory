import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DepositSwitchCreateRequestOptions:
    r"""DepositSwitchCreateRequestOptions
    Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
    """
    
    transaction_item_access_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_item_access_tokens') }})
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
