import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floodlightactivitygroup as shared_floodlightactivitygroup


@dataclass_json
@dataclasses.dataclass
class FloodlightActivityGroupsListResponse:
    r"""FloodlightActivityGroupsListResponse
    Floodlight Activity Group List Response
    """
    
    floodlight_activity_groups: Optional[list[shared_floodlightactivitygroup.FloodlightActivityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityGroups') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
