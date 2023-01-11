import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentinstructionv3 as shared_paymentinstructionv3


@dataclass_json
@dataclasses.dataclass
class CreatePayoutRequestV3:
    payments: list[shared_paymentinstructionv3.PaymentInstructionV3] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    payout_from_payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutFromPayorId') }})
    payout_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    payout_to_payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutToPayorId') }})
    
