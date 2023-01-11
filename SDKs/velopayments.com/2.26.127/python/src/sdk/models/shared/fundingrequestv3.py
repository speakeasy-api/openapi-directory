import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FundingRequestV3:
    amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    funding_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountId') }})
    
