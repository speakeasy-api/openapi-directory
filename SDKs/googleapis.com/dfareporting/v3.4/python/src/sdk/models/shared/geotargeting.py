import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import city as shared_city
from ..shared import country as shared_country
from ..shared import metro as shared_metro
from ..shared import postalcode as shared_postalcode
from ..shared import region as shared_region


@dataclass_json
@dataclasses.dataclass
class GeoTargeting:
    r"""GeoTargeting
    Geographical Targeting.
    """
    
    cities: Optional[list[shared_city.City]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    countries: Optional[list[shared_country.Country]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    exclude_countries: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeCountries') }})
    metros: Optional[list[shared_metro.Metro]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metros') }})
    postal_codes: Optional[list[shared_postalcode.PostalCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodes') }})
    regions: Optional[list[shared_region.Region]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
