import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceAccountV3:
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    source_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    source_account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    total_payout_cost: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayoutCost') }})
    
