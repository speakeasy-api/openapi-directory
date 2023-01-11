import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price
from ..shared import inappproductlisting as shared_inappproductlisting


@dataclass_json
@dataclasses.dataclass
class InAppProduct:
    default_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    default_price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrice') }})
    grace_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriod') }})
    listings: Optional[dict[str, shared_inappproductlisting.InAppProductListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    prices: Optional[dict[str, shared_price.Price]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    purchase_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseType') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionPeriod') }})
    trial_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
