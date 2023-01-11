import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emissionsgramsperpax as shared_emissionsgramsperpax
from ..shared import flight as shared_flight


@dataclass_json
@dataclasses.dataclass
class FlightWithEmissions:
    r"""FlightWithEmissions
    Direct flight with emission estimates.
    """
    
    emissions_grams_per_pax: Optional[shared_emissionsgramsperpax.EmissionsGramsPerPax] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emissionsGramsPerPax') }})
    flight: Optional[shared_flight.Flight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flight') }})
    
