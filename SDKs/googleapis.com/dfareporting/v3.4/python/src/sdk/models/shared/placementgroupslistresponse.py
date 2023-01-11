import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementgroup as shared_placementgroup


@dataclass_json
@dataclasses.dataclass
class PlacementGroupsListResponse:
    r"""PlacementGroupsListResponse
    Placement Group List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    placement_groups: Optional[list[shared_placementgroup.PlacementGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroups') }})
    
