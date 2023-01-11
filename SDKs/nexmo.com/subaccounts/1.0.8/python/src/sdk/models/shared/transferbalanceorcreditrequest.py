import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransferBalanceOrCreditRequest:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    
