import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import promotion as shared_promotion


@dataclass_json
@dataclasses.dataclass
class UnitInvoiceAdditionalCharge:
    additional_charge_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargeAmount') }})
    additional_charge_promotions: Optional[list[shared_promotion.Promotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargePromotions') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
