import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DistrictList:
    abbreviation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
