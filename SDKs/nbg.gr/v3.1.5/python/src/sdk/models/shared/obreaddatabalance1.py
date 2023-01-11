import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obcashbalance1 as shared_obcashbalance1


@dataclass_json
@dataclasses.dataclass
class ObReadDataBalance1:
    balance: list[shared_obcashbalance1.ObCashBalance1] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Balance') }})
    
