import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class GeocodeAddressResponse:
    found: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    locations: list[shared_location.Location] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
