import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latlng as shared_latlng


@dataclass_json
@dataclasses.dataclass
class PointRadius:
    r"""PointRadius
    A radius around a particular point (latitude/longitude).
    """
    
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    radius_km: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusKm') }})
    
