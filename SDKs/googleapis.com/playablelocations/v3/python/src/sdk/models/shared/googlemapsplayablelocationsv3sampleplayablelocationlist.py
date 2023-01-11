import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsplayablelocationsv3sampleplayablelocation as shared_googlemapsplayablelocationsv3sampleplayablelocation


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationList:
    locations: Optional[list[shared_googlemapsplayablelocationsv3sampleplayablelocation.GoogleMapsPlayablelocationsV3SamplePlayableLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
