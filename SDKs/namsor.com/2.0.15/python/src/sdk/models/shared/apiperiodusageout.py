import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apibillingperiodusageout as shared_apibillingperiodusageout
from ..shared import apiplansubscriptionout as shared_apiplansubscriptionout


@dataclass_json
@dataclasses.dataclass
class APIPeriodUsageOut:
    billing_period: Optional[shared_apibillingperiodusageout.APIBillingPeriodUsageOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriod') }})
    overage_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageCurrency') }})
    overage_excl_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageExclTax') }})
    overage_incl_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageInclTax') }})
    overage_quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageQuantity') }})
    subscription: Optional[shared_apiplansubscriptionout.APIPlanSubscriptionOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
