import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransmissionTypes:
    ach: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACH') }})
    same_day_ach: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAME_DAY_ACH') }})
    wire: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WIRE') }})
    
