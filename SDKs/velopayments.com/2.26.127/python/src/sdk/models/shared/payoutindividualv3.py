import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoutnamev3 as shared_payoutnamev3


@dataclass_json
@dataclasses.dataclass
class PayoutIndividualV3:
    name: shared_payoutnamev3.PayoutNameV3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
