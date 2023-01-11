import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placement as shared_placement


@dataclass_json
@dataclasses.dataclass
class PlacementsListResponse:
    r"""PlacementsListResponse
    Placement List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    placements: Optional[list[shared_placement.Placement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placements') }})
    
