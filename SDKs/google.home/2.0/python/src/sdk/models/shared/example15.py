import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Example15:
    display_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_string') }})
    locale: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    
