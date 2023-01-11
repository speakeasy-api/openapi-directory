import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BankAccountResultStatusEnum(str, Enum):
    CREATED = "created"
    WIPED = "wiped"


@dataclass_json
@dataclasses.dataclass
class BankAccountResult:
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    bank_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_name') }})
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_checking: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_checking') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    routing_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing_number') }})
    status: BankAccountResultStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
