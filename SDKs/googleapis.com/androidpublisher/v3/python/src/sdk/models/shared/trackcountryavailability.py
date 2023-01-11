import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tracktargetedcountry as shared_tracktargetedcountry


@dataclass_json
@dataclasses.dataclass
class TrackCountryAvailability:
    r"""TrackCountryAvailability
    Resource for per-track country availability information.
    """
    
    countries: Optional[list[shared_tracktargetedcountry.TrackTargetedCountry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    rest_of_world: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restOfWorld') }})
    sync_with_production: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWithProduction') }})
    
