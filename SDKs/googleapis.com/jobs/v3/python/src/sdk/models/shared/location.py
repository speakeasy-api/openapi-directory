import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latlng as shared_latlng
from ..shared import postaladdress as shared_postaladdress

class LocationLocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    COUNTRY = "COUNTRY"
    ADMINISTRATIVE_AREA = "ADMINISTRATIVE_AREA"
    SUB_ADMINISTRATIVE_AREA = "SUB_ADMINISTRATIVE_AREA"
    LOCALITY = "LOCALITY"
    POSTAL_CODE = "POSTAL_CODE"
    SUB_LOCALITY = "SUB_LOCALITY"
    SUB_LOCALITY_1 = "SUB_LOCALITY_1"
    SUB_LOCALITY_2 = "SUB_LOCALITY_2"
    NEIGHBORHOOD = "NEIGHBORHOOD"
    STREET_ADDRESS = "STREET_ADDRESS"


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    Output only. A resource that represents a location with full geographic information.
    """
    
    lat_lng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLng') }})
    location_type: Optional[LocationLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    postal_address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalAddress') }})
    radius_in_miles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusInMiles') }})
    
