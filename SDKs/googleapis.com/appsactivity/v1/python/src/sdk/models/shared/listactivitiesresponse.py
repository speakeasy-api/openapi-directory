import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity as shared_activity


@dataclass_json
@dataclasses.dataclass
class ListActivitiesResponse:
    r"""ListActivitiesResponse
    The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
    """
    
    activities: Optional[list[shared_activity.Activity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
