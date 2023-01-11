import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latlng as shared_latlng


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1LocationInfo:
    r"""GoogleCloudVisionV1p2beta1LocationInfo
    Detected entity location information.
    """
    
    lat_lng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLng') }})
    
