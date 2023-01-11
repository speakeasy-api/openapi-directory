import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypelatlng as shared_googletypelatlng


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocation:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocation
    A geographical point suitable for placing game objects in location-based games.
    """
    
    center_point: Optional[shared_googletypelatlng.GoogleTypeLatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerPoint') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    place_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    plus_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusCode') }})
    snapped_point: Optional[shared_googletypelatlng.GoogleTypeLatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snappedPoint') }})
    types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
