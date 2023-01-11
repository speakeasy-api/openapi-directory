import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createpayee as shared_createpayee


@dataclass_json
@dataclasses.dataclass
class CreatePayeesRequestInput:
    payees: list[shared_createpayee.CreatePayeeInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payees') }})
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    
