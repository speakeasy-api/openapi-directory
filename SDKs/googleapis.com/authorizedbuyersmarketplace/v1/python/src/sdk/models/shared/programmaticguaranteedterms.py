import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price

class ProgrammaticGuaranteedTermsReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPONSORSHIP = "SPONSORSHIP"


@dataclass_json
@dataclasses.dataclass
class ProgrammaticGuaranteedTerms:
    r"""ProgrammaticGuaranteedTerms
    Pricing terms for Programmatic Guaranteed Deals.
    """
    
    fixed_price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrice') }})
    guaranteed_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedLooks') }})
    impression_cap: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionCap') }})
    minimum_daily_looks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumDailyLooks') }})
    percent_share_of_voice: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentShareOfVoice') }})
    reservation_type: Optional[ProgrammaticGuaranteedTermsReservationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationType') }})
    
