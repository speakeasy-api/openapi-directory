import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facilityattributes as shared_facilityattributes

class FacilityTypeEnum(str, Enum):
    VA_FACILITIES = "va_facilities"


@dataclass_json
@dataclasses.dataclass
class Facility:
    r"""Facility
    JSON API-compliant object describing a VA facility
    """
    
    attributes: shared_facilityattributes.FacilityAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FacilityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
