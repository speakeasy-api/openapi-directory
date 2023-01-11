import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressinput as shared_addressinput
from ..shared import servicebusinesscontext as shared_servicebusinesscontext
from ..shared import emailinput as shared_emailinput
from ..shared import phoneinput as shared_phoneinput

class VerifyLocationRequestMethodEnum(str, Enum):
    VERIFICATION_METHOD_UNSPECIFIED = "VERIFICATION_METHOD_UNSPECIFIED"
    ADDRESS = "ADDRESS"
    EMAIL = "EMAIL"
    PHONE_CALL = "PHONE_CALL"
    SMS = "SMS"
    AUTO = "AUTO"


@dataclass_json
@dataclasses.dataclass
class VerifyLocationRequest:
    r"""VerifyLocationRequest
    Request message for Verifications.VerifyLocation.
    """
    
    address_input: Optional[shared_addressinput.AddressInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressInput') }})
    context: Optional[shared_servicebusinesscontext.ServiceBusinessContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    email_input: Optional[shared_emailinput.EmailInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailInput') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    method: Optional[VerifyLocationRequestMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    phone_input: Optional[shared_phoneinput.PhoneInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneInput') }})
    
