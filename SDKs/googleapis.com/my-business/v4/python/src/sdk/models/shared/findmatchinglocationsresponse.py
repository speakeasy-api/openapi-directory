import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchedlocation as shared_matchedlocation


@dataclass_json
@dataclasses.dataclass
class FindMatchingLocationsResponse:
    r"""FindMatchingLocationsResponse
    Response message for Locations.FindMatchingLocations.
    """
    
    match_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchTime') }})
    matched_locations: Optional[list[shared_matchedlocation.MatchedLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedLocations') }})
    
