import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tax as shared_tax


@dataclass_json
@dataclasses.dataclass
class AllowanceCharge:
    amount_excluding_vat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingVat') }})
    tax: shared_tax.Tax = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    taxes_duties_fees: Optional[list[shared_tax.Tax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes_duties_fees') }})
    
