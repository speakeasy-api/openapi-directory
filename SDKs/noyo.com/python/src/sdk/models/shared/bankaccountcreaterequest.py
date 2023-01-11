import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BankAccountCreateRequest:
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    bank_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_name') }})
    is_checking: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_checking') }})
    routing_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing_number') }})
    
