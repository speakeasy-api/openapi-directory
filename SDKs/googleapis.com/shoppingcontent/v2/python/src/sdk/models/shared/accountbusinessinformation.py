import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaddress as shared_accountaddress
from ..shared import accountcustomerservice as shared_accountcustomerservice


@dataclass_json
@dataclasses.dataclass
class AccountBusinessInformation:
    address: Optional[shared_accountaddress.AccountAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    customer_service: Optional[shared_accountcustomerservice.AccountCustomerService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerService') }})
    korean_business_registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('koreanBusinessRegistrationNumber') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
