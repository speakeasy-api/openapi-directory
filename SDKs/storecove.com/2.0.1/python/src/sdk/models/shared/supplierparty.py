import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class SupplierParty:
    r"""SupplierParty
    A party that can send invoices
    """
    
    contact: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    
