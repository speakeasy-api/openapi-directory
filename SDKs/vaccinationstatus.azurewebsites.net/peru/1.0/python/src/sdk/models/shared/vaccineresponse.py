import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vaccine as shared_vaccine


@dataclass_json
@dataclasses.dataclass
class VaccineResponse:
    age: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vaccinations: Optional[list[shared_vaccine.Vaccine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccinations') }})
    
