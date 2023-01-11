import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsplayablelocationsv3sampleareafilter as shared_googlemapsplayablelocationsv3sampleareafilter
from ..shared import googlemapsplayablelocationsv3samplecriterion as shared_googlemapsplayablelocationsv3samplecriterion


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest
     Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more \"criteria\" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.
    """
    
    area_filter: Optional[shared_googlemapsplayablelocationsv3sampleareafilter.GoogleMapsPlayablelocationsV3SampleAreaFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaFilter') }})
    criteria: Optional[list[shared_googlemapsplayablelocationsv3samplecriterion.GoogleMapsPlayablelocationsV3SampleCriterion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    
