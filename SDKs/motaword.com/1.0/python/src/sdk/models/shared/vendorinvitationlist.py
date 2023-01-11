import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vendorwithneeds as shared_vendorwithneeds


@dataclass_json
@dataclasses.dataclass
class VendorInvitationList:
    vendors: Optional[list[shared_vendorwithneeds.VendorWithNeeds]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendors') }})
    
