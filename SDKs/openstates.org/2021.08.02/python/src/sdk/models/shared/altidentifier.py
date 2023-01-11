import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AltIdentifier:
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    scheme: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
