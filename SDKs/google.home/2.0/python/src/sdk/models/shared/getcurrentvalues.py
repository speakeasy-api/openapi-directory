import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Getcurrentvalues:
    endpoint_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint_enabled') }})
    hotword_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotword_enabled') }})
    
