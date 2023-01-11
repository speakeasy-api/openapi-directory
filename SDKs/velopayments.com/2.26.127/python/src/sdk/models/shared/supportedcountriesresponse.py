import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supportedcountry as shared_supportedcountry


@dataclass_json
@dataclasses.dataclass
class SupportedCountriesResponse:
    countries: Optional[list[shared_supportedcountry.SupportedCountry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    
