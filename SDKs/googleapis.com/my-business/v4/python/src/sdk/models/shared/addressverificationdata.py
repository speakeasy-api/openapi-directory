import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postaladdress as shared_postaladdress


@dataclass_json
@dataclasses.dataclass
class AddressVerificationData:
    r"""AddressVerificationData
    Display data for verifications through postcard.
    """
    
    address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    business_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessName') }})
    
