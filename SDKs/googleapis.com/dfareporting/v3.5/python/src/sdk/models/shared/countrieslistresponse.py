import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import country as shared_country


@dataclass_json
@dataclasses.dataclass
class CountriesListResponse:
    r"""CountriesListResponse
    Country List Response
    """
    
    countries: Optional[list[shared_country.Country]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
