import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacitycommitment as shared_capacitycommitment


@dataclass_json
@dataclasses.dataclass
class ListCapacityCommitmentsResponse:
    r"""ListCapacityCommitmentsResponse
    The response for ReservationService.ListCapacityCommitments.
    """
    
    capacity_commitments: Optional[list[shared_capacitycommitment.CapacityCommitment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityCommitments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
