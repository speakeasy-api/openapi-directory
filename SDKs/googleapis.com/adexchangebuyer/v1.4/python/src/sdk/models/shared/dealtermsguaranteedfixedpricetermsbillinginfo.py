import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class DealTermsGuaranteedFixedPriceTermsBillingInfo:
    currency_conversion_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyConversionTimeMs') }})
    dfp_line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dfpLineItemId') }})
    original_contracted_quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalContractedQuantity') }})
    price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
