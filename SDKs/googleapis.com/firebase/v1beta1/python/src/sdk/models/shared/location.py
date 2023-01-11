import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LocationFeaturesEnum(str, Enum):
    LOCATION_FEATURE_UNSPECIFIED = "LOCATION_FEATURE_UNSPECIFIED"
    FIRESTORE = "FIRESTORE"
    DEFAULT_STORAGE = "DEFAULT_STORAGE"
    FUNCTIONS = "FUNCTIONS"

class LocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    REGIONAL = "REGIONAL"
    MULTI_REGIONAL = "MULTI_REGIONAL"


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    A GCP resource location that can be selected for a FirebaseProject.
    """
    
    features: Optional[list[LocationFeaturesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    type: Optional[LocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
