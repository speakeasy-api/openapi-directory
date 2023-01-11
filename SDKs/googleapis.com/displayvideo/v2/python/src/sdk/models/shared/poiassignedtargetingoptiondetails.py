import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum(str, Enum):
    DISTANCE_UNIT_UNSPECIFIED = "DISTANCE_UNIT_UNSPECIFIED"
    DISTANCE_UNIT_MILES = "DISTANCE_UNIT_MILES"
    DISTANCE_UNIT_KILOMETERS = "DISTANCE_UNIT_KILOMETERS"


@dataclass_json
@dataclasses.dataclass
class PoiAssignedTargetingOptionDetails:
    r"""PoiAssignedTargetingOptionDetails
    Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    proximity_radius_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusAmount') }})
    proximity_radius_unit: Optional[PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusUnit') }})
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclasses.dataclass
class PoiAssignedTargetingOptionDetailsInput:
    r"""PoiAssignedTargetingOptionDetailsInput
    Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
    """
    
    proximity_radius_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusAmount') }})
    proximity_radius_unit: Optional[PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusUnit') }})
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
