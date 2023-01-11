import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PaymentInitiationRecipientListRequest:
    r"""PaymentInitiationRecipientListRequest
    PaymentInitiationRecipientListRequest defines the request schema for `/payment_initiation/recipient/list`
    """
    
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
