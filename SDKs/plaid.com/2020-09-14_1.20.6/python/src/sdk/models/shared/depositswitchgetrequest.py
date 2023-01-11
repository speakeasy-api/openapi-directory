import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DepositSwitchGetRequest:
    r"""DepositSwitchGetRequest
    DepositSwitchGetRequest defines the request schema for `/deposit_switch/get`
    """
    
    deposit_switch_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit_switch_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
