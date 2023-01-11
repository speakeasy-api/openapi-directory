import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScanfordevicesRequest:
    clear_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clear_results') }})
    enable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
