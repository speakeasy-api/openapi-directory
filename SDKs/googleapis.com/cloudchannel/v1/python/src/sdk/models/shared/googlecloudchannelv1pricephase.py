import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1price as shared_googlecloudchannelv1price
from ..shared import googlecloudchannelv1pricetier as shared_googlecloudchannelv1pricetier

class GoogleCloudChannelV1PricePhasePeriodTypeEnum(str, Enum):
    PERIOD_TYPE_UNSPECIFIED = "PERIOD_TYPE_UNSPECIFIED"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1PricePhase:
    r"""GoogleCloudChannelV1PricePhase
    Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
    """
    
    first_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPeriod') }})
    last_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPeriod') }})
    period_type: Optional[GoogleCloudChannelV1PricePhasePeriodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    price: Optional[shared_googlecloudchannelv1price.GoogleCloudChannelV1Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_tiers: Optional[list[shared_googlecloudchannelv1pricetier.GoogleCloudChannelV1PriceTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceTiers') }})
    
