import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weight as shared_weight

class ShippingShippingPricingModelEnum(str, Enum):
    FREE = "FREE"
    STANDARD = "STANDARD"


@dataclass_json
@dataclasses.dataclass
class Shipping:
    shipping_pricing_model: Optional[ShippingShippingPricingModelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingPricingModel') }})
    weight: Optional[shared_weight.Weight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    weight_in_grams: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightInGrams') }})
    
