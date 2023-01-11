import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dealtermsguaranteedfixedpricetermsbillinginfo as shared_dealtermsguaranteedfixedpricetermsbillinginfo
from ..shared import priceperbuyer as shared_priceperbuyer


@dataclass_json
@dataclasses.dataclass
class DealTermsGuaranteedFixedPriceTerms:
    billing_info: Optional[shared_dealtermsguaranteedfixedpricetermsbillinginfo.DealTermsGuaranteedFixedPriceTermsBillingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingInfo') }})
    fixed_prices: Optional[list[shared_priceperbuyer.PricePerBuyer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrices') }})
    guaranteed_impressions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedImpressions') }})
    guaranteed_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedLooks') }})
    minimum_daily_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumDailyLooks') }})
    
