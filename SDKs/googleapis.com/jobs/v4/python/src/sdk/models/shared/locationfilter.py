import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latlng as shared_latlng

class LocationFilterTelecommutePreferenceEnum(str, Enum):
    TELECOMMUTE_PREFERENCE_UNSPECIFIED = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
    TELECOMMUTE_EXCLUDED = "TELECOMMUTE_EXCLUDED"
    TELECOMMUTE_ALLOWED = "TELECOMMUTE_ALLOWED"
    TELECOMMUTE_JOBS_EXCLUDED = "TELECOMMUTE_JOBS_EXCLUDED"


@dataclass_json
@dataclasses.dataclass
class LocationFilter:
    r"""LocationFilter
    Geographic region of the search.
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    distance_in_miles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceInMiles') }})
    lat_lng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLng') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    telecommute_preference: Optional[LocationFilterTelecommutePreferenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telecommutePreference') }})
    
