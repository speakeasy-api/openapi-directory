import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlegacypromotionbenefit as shared_orderlegacypromotionbenefit


@dataclass_json
@dataclasses.dataclass
class OrderLegacyPromotion:
    benefits: Optional[list[shared_orderlegacypromotionbenefit.OrderLegacyPromotionBenefit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    effective_dates: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDates') }})
    generic_redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRedemptionCode') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTitle') }})
    product_applicability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productApplicability') }})
    redemption_channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionChannel') }})
    
