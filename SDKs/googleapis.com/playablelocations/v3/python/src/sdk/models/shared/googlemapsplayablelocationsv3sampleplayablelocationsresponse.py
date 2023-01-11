import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsplayablelocationsv3sampleplayablelocationlist as shared_googlemapsplayablelocationsv3sampleplayablelocationlist


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
     Response for the SamplePlayableLocations method.
    """
    
    locations_per_game_object_type: Optional[dict[str, shared_googlemapsplayablelocationsv3sampleplayablelocationlist.GoogleMapsPlayablelocationsV3SamplePlayableLocationList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationsPerGameObjectType') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
