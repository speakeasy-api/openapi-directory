import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import city as shared_city


@dataclass_json
@dataclasses.dataclass
class CitiesListResponse:
    r"""CitiesListResponse
    City List Response
    """
    
    cities: Optional[list[shared_city.City]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
