import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsplayablelocationsv3samplespacingoptions as shared_googlemapsplayablelocationsv3samplespacingoptions


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SampleFilter:
    r"""GoogleMapsPlayablelocationsV3SampleFilter
    Specifies the filters to use when searching for playable locations.
    """
    
    included_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedTypes') }})
    max_location_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLocationCount') }})
    spacing: Optional[shared_googlemapsplayablelocationsv3samplespacingoptions.GoogleMapsPlayablelocationsV3SampleSpacingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spacing') }})
    
