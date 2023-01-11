import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactionstatus_enum as shared_transactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class PaymentInitiationStatusResponse200JSON:
    r"""PaymentInitiationStatusResponse200JSON
    Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
    """
    
    transaction_status: shared_transactionstatus_enum.TransactionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    funds_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundsAvailable') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    
