import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressverificationdata as shared_addressverificationdata
from ..shared import emailverificationdata as shared_emailverificationdata
from ..shared import phoneverificationdata as shared_phoneverificationdata

class VerificationOptionVerificationMethodEnum(str, Enum):
    VERIFICATION_METHOD_UNSPECIFIED = "VERIFICATION_METHOD_UNSPECIFIED"
    ADDRESS = "ADDRESS"
    EMAIL = "EMAIL"
    PHONE_CALL = "PHONE_CALL"
    SMS = "SMS"
    AUTO = "AUTO"


@dataclass_json
@dataclasses.dataclass
class VerificationOption:
    r"""VerificationOption
    The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
    """
    
    address_data: Optional[shared_addressverificationdata.AddressVerificationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressData') }})
    email_data: Optional[shared_emailverificationdata.EmailVerificationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailData') }})
    phone_data: Optional[shared_phoneverificationdata.PhoneVerificationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneData') }})
    verification_method: Optional[VerificationOptionVerificationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationMethod') }})
    
