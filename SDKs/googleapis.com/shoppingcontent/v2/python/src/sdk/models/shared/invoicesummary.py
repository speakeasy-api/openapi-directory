import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoicesummaryadditionalchargesummary as shared_invoicesummaryadditionalchargesummary
from ..shared import amount as shared_amount
from ..shared import promotion as shared_promotion


@dataclass_json
@dataclasses.dataclass
class InvoiceSummary:
    additional_charge_summaries: Optional[list[shared_invoicesummaryadditionalchargesummary.InvoiceSummaryAdditionalChargeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargeSummaries') }})
    customer_balance: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerBalance') }})
    google_balance: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleBalance') }})
    merchant_balance: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantBalance') }})
    product_total: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTotal') }})
    promotion_summaries: Optional[list[shared_promotion.Promotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSummaries') }})
    
