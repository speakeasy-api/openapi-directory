import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createpayeeaddress_2 as shared_createpayeeaddress_2
from ..shared import challenge_2 as shared_challenge_2
from ..shared import company_2 as shared_company_2
from ..shared import createindividual_2 as shared_createindividual_2
from ..shared import createpaymentchannel_2 as shared_createpaymentchannel_2
from ..shared import payeepayorref as shared_payeepayorref
from ..shared import payeetype_enum as shared_payeetype_enum


@dataclass_json
@dataclasses.dataclass
class FailedPayee2:
    address: Optional[shared_createpayeeaddress_2.CreatePayeeAddress2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    challenge: Optional[shared_challenge_2.Challenge2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[shared_company_2.Company2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[shared_createindividual_2.CreateIndividual2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payment_channel: Optional[shared_createpaymentchannel_2.CreatePaymentChannel2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannel') }})
    payor_refs: Optional[list[shared_payeepayorref.PayeePayorRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorRefs') }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    type: Optional[shared_payeetype_enum.PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
