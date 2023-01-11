import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postaladdress as shared_postaladdress


@dataclass_json
@dataclasses.dataclass
class OrganizationInfo:
    r"""OrganizationInfo
    Additional Info stored for an organization.
    """
    
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    postal_address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalAddress') }})
    registered_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredDomain') }})
    
