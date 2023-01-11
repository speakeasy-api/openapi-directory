import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geometry as shared_geometry
from ..shared import properties as shared_properties

class GeoFacilityTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclasses.dataclass
class GeoFacility:
    r"""GeoFacility
    GeoJSON-complaint Feature object describing a VA Facility
    """
    
    geometry: shared_geometry.Geometry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: shared_properties.Properties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: GeoFacilityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
