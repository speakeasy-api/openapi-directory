import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facility as shared_facility


@dataclass_json
@dataclasses.dataclass
class FacilityReadResponse:
    data: shared_facility.Facility = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
