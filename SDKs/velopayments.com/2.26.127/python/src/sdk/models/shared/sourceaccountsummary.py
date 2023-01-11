import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentauditcurrency_enum as shared_paymentauditcurrency_enum


@dataclass_json
@dataclasses.dataclass
class SourceAccountSummary:
    source_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    total_cost: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCost') }})
    currency: Optional[shared_paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
