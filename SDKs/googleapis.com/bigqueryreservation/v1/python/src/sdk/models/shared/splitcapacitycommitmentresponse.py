import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacitycommitment as shared_capacitycommitment


@dataclass_json
@dataclasses.dataclass
class SplitCapacityCommitmentResponse:
    r"""SplitCapacityCommitmentResponse
    The response for ReservationService.SplitCapacityCommitment.
    """
    
    first: Optional[shared_capacitycommitment.CapacityCommitment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    second: Optional[shared_capacitycommitment.CapacityCommitment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('second') }})
    
