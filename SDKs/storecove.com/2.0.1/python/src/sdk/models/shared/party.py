import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class Party:
    r"""Party
    A party that can receive or send invoices
    """
    
    address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    company_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    contact: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    
