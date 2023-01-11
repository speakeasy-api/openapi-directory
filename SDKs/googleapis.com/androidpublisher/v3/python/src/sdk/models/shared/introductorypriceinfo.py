import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IntroductoryPriceInfo:
    r"""IntroductoryPriceInfo
    Contains the introductory price information for a subscription.
    """
    
    introductory_price_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPriceAmountMicros') }})
    introductory_price_currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPriceCurrencyCode') }})
    introductory_price_cycles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPriceCycles') }})
    introductory_price_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introductoryPricePeriod') }})
    
