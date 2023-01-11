import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SerpData:
    query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    website: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
