import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floodlightactivity as shared_floodlightactivity


@dataclass_json
@dataclasses.dataclass
class FloodlightActivitiesListResponse:
    r"""FloodlightActivitiesListResponse
    Floodlight Activity List Response
    """
    
    floodlight_activities: Optional[list[shared_floodlightactivity.FloodlightActivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivities') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
