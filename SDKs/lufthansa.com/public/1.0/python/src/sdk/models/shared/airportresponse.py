import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import airportresource as shared_airportresource


@dataclass_json
@dataclasses.dataclass
class AirportResponse:
    airport_resource: Optional[shared_airportresource.AirportResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirportResource') }})
    
