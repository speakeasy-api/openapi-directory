import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import closeapproachdata as shared_closeapproachdata
from ..shared import estimateddiametercontainer as shared_estimateddiametercontainer
from ..shared import orbitaldata as shared_orbitaldata


@dataclass_json
@dataclasses.dataclass
class NearEarthObject:
    absolute_magnitude_h: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolute_magnitude_h') }})
    close_approach_data: Optional[list[shared_closeapproachdata.CloseApproachData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_data') }})
    designation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation') }})
    estimated_diameter: Optional[shared_estimateddiametercontainer.EstimatedDiameterContainer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_diameter') }})
    is_potentially_hazardous_asteroid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_potentially_hazardous_asteroid') }})
    is_sentry_object: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_sentry_object') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_limited: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name_limited') }})
    nasa_jpl_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nasa_jpl_url') }})
    neo_reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neo_reference_id') }})
    orbital_data: Optional[shared_orbitaldata.OrbitalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbital_data') }})
    sentry_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentry_data') }})
    
