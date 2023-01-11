import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestattributes as shared_guestattributes


@dataclass_json
@dataclasses.dataclass
class GetGuestAttributesResponse:
    r"""GetGuestAttributesResponse
    Response for GetGuestAttributes.
    """
    
    guest_attributes: Optional[list[shared_guestattributes.GuestAttributes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAttributes') }})
    
