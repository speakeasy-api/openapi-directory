import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactionstatus_sbs_enum as shared_transactionstatus_sbs_enum


@dataclass_json
@dataclasses.dataclass
class SigningBasketStatusResponse200:
    transaction_status: shared_transactionstatus_sbs_enum.TransactionStatusSbsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    
