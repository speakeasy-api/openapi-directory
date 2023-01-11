import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createpayeeaddress as shared_createpayeeaddress
from ..shared import challenge as shared_challenge
from ..shared import company as shared_company
from ..shared import createindividual as shared_createindividual
from ..shared import createpaymentchannel as shared_createpaymentchannel
from ..shared import payeetype_enum as shared_payeetype_enum


@dataclass_json
@dataclasses.dataclass
class CreatePayeeInput:
    address: shared_createpayeeaddress.CreatePayeeAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    remote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    type: shared_payeetype_enum.PayeeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    challenge: Optional[shared_challenge.Challenge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[shared_company.Company] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    individual: Optional[shared_createindividual.CreateIndividual] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payment_channel: Optional[shared_createpaymentchannel.CreatePaymentChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannel') }})
    
