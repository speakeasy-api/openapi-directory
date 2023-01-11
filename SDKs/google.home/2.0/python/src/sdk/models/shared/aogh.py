import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Aogh:
    aogh_api_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aogh_api_version') }})
    
