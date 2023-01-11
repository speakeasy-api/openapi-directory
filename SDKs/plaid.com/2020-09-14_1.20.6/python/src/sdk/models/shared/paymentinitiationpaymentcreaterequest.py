import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PaymentInitiationPaymentCreateRequest:
    r"""PaymentInitiationPaymentCreateRequest
    PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
    """
    
    amount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    recipient_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    schedule: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
