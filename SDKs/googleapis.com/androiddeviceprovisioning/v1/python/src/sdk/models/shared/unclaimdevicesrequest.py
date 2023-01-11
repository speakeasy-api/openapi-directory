import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partnerunclaim as shared_partnerunclaim


@dataclass_json
@dataclasses.dataclass
class UnclaimDevicesRequest:
    r"""UnclaimDevicesRequest
    Request to unclaim devices asynchronously in batch.
    """
    
    unclaims: Optional[list[shared_partnerunclaim.PartnerUnclaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclaims') }})
    
