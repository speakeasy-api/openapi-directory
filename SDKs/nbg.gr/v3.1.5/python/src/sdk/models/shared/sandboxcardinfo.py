import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SandboxCardInfo:
    r"""SandboxCardInfo
    Sandbox card information
    """
    
    expiration: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    holder_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('holderName') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    available_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableBalance') }})
    credit_limit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditLimit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ledger_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledgerBalance') }})
    sub_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
