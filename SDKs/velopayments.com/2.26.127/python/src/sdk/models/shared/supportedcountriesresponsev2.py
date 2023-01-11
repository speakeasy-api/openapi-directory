import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supportedcountryv2 as shared_supportedcountryv2


@dataclass_json
@dataclasses.dataclass
class SupportedCountriesResponseV2:
    countries: Optional[list[shared_supportedcountryv2.SupportedCountryV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    
