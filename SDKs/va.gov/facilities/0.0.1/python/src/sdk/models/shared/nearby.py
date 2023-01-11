import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nearbyattributes as shared_nearbyattributes

class NearbyTypeEnum(str, Enum):
    NEARBY_FACILITY = "NearbyFacility"


@dataclass_json
@dataclasses.dataclass
class Nearby:
    r"""Nearby
    JSON API-compliant object describing a nearby VA facility
    """
    
    attributes: shared_nearbyattributes.NearbyAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: NearbyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
