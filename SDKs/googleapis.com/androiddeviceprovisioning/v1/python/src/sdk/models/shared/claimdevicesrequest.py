import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partnerclaim as shared_partnerclaim


@dataclass_json
@dataclasses.dataclass
class ClaimDevicesRequest:
    r"""ClaimDevicesRequest
    Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
    """
    
    claims: Optional[list[shared_partnerclaim.PartnerClaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    
