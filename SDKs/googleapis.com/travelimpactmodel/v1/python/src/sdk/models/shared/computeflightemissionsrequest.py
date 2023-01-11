import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flight as shared_flight


@dataclass_json
@dataclasses.dataclass
class ComputeFlightEmissionsRequest:
    r"""ComputeFlightEmissionsRequest
    Input definition for the ComputeFlightEmissions request.
    """
    
    flights: Optional[list[shared_flight.Flight]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flights') }})
    
