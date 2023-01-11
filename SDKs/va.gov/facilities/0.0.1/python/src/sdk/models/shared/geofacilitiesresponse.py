import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geofacility as shared_geofacility

class GeoFacilitiesResponseTypeEnum(str, Enum):
    FEATURE_COLLECTION = "FeatureCollection"


@dataclass_json
@dataclasses.dataclass
class GeoFacilitiesResponse:
    type: GeoFacilitiesResponseTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    features: Optional[list[shared_geofacility.GeoFacility]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    
