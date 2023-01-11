import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unitinvoiceadditionalcharge as shared_unitinvoiceadditionalcharge
from ..shared import promotion as shared_promotion
from ..shared import price as shared_price
from ..shared import unitinvoicetaxline as shared_unitinvoicetaxline


@dataclass_json
@dataclasses.dataclass
class UnitInvoice:
    additional_charges: Optional[list[shared_unitinvoiceadditionalcharge.UnitInvoiceAdditionalCharge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCharges') }})
    promotions: Optional[list[shared_promotion.Promotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    unit_price_pretax: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPricePretax') }})
    unit_price_taxes: Optional[list[shared_unitinvoicetaxline.UnitInvoiceTaxLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPriceTaxes') }})
    
