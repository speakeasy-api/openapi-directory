import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import otherregionssubscriptionofferphaseprices as shared_otherregionssubscriptionofferphaseprices


@dataclass_json
@dataclasses.dataclass
class OtherRegionsSubscriptionOfferPhaseConfig:
    r"""OtherRegionsSubscriptionOfferPhaseConfig
    Configuration for any new locations Play may launch in for a single offer phase.
    """
    
    absolute_discounts: Optional[shared_otherregionssubscriptionofferphaseprices.OtherRegionsSubscriptionOfferPhasePrices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteDiscounts') }})
    other_regions_prices: Optional[shared_otherregionssubscriptionofferphaseprices.OtherRegionsSubscriptionOfferPhasePrices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsPrices') }})
    relative_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDiscount') }})
    
