import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingaddress as shared_billingaddress
from ..shared import creditcard as shared_creditcard


@dataclass_json
@dataclasses.dataclass
class PaymentInfoCorporate:
    allow_api_invoicing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_api_invoicing') }})
    allow_payment_code: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_payment_code') }})
    auto_charge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_charge') }})
    billing: Optional[shared_billingaddress.BillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    card: Optional[shared_creditcard.CreditCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    contact_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email_address') }})
    payment_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_code') }})
    

@dataclass_json
@dataclasses.dataclass
class PaymentInfo:
    billing: Optional[shared_billingaddress.BillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    card: Optional[shared_creditcard.CreditCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    corporate: Optional[PaymentInfoCorporate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporate') }})
    shared_card: Optional[shared_creditcard.CreditCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_card') }})
    
