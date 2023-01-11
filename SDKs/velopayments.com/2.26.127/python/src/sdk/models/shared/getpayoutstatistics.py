import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPayoutStatistics:
    this_month_failed_payments_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thisMonthFailedPaymentsCount') }})
    this_month_payouts_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thisMonthPayoutsCount') }})
    
