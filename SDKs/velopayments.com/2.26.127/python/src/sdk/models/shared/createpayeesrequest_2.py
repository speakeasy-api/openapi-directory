import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createpayee_2 as shared_createpayee_2


@dataclass_json
@dataclasses.dataclass
class CreatePayeesRequest2Input:
    payees: list[shared_createpayee_2.CreatePayee2Input] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payees') }})
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    
