import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlehomeenterprisesdmv1structure as shared_googlehomeenterprisesdmv1structure


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1ListStructuresResponse:
    r"""GoogleHomeEnterpriseSdmV1ListStructuresResponse
    Response message for SmartDeviceManagementService.ListStructures
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    structures: Optional[list[shared_googlehomeenterprisesdmv1structure.GoogleHomeEnterpriseSdmV1Structure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    
