import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import priceperbuyer as shared_priceperbuyer

class GuaranteedFixedPriceTermsReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPONSORSHIP = "SPONSORSHIP"


@dataclass_json
@dataclasses.dataclass
class GuaranteedFixedPriceTerms:
    r"""GuaranteedFixedPriceTerms
    Terms for Programmatic Guaranteed Deals.
    """
    
    fixed_prices: Optional[list[shared_priceperbuyer.PricePerBuyer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrices') }})
    guaranteed_impressions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedImpressions') }})
    guaranteed_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedLooks') }})
    impression_cap: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionCap') }})
    minimum_daily_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumDailyLooks') }})
    percent_share_of_voice: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentShareOfVoice') }})
    reservation_type: Optional[GuaranteedFixedPriceTermsReservationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationType') }})
    
