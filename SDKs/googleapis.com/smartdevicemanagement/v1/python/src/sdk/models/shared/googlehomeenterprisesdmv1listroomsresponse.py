import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlehomeenterprisesdmv1room as shared_googlehomeenterprisesdmv1room


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1ListRoomsResponse:
    r"""GoogleHomeEnterpriseSdmV1ListRoomsResponse
    Response message for SmartDeviceManagementService.ListRooms
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rooms: Optional[list[shared_googlehomeenterprisesdmv1room.GoogleHomeEnterpriseSdmV1Room]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    
