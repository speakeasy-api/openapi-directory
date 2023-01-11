import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RejectedPaymentV3:
    amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyType') }})
    payor_payment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    remote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    source_account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    line_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    payment_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    remote_system_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    
