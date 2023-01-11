import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flightwithemissions as shared_flightwithemissions
from ..shared import modelversion as shared_modelversion


@dataclass_json
@dataclasses.dataclass
class ComputeFlightEmissionsResponse:
    r"""ComputeFlightEmissionsResponse
    Output definition for the ComputeFlightEmissions response.
    """
    
    flight_emissions: Optional[list[shared_flightwithemissions.FlightWithEmissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEmissions') }})
    model_version: Optional[shared_modelversion.ModelVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    
